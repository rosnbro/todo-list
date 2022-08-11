import render from './render';
import renderNav from './renderNav';
import renderTasks from './renderTasks';
import taskForm from './taskForm';
import Sort from './sort.svg';
import './style.css';
//if using local storage try using object.assign to add object methods

let sortIcon = new Image();
sortIcon.src = Sort;

let projects = [];
let projectIndex = 0;
let tasks = [];
let taskIndex = 0;
let projectPalette = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class project {
    constructor(name, selected, color) {
        this.name = name;
        this.selected = selected;
        this.color = color;
        this.delete = function() {
            if (this.name == 'all') {
                tasks.length = 0;
                projects.length = 0;
                projects.push(all);
                renderNav(projects, tasks, 'all');
                renderTasks(projects, tasks);
            } else {
                projects.splice(projects.indexOf(this), 1);
                tasks.forEach((t) => {
                    if (t.project == this.name) {
                        tasks.splice(tasks.indexOf(t), 1);
                    }
                });
                projects.forEach(p => p.selected = true);
                renderNav(projects, tasks, 'all');
                renderTasks(projects, tasks);
            }
        }
    }
}

let all = new project('all', true, projectPalette[projectIndex++]);
projects.push(all);

class task {
    constructor(progress, priority, title, project, description, dueDate, index) {
        this.progress = progress;
        this.priority = priority;
        this.title = title;
        this.project = project;
        this.description = description;
        this.dueDate = dueDate;
        this.index = index
        this.complete = function() {
            (this.progress != 100) ? this.progress = 100 : this.progress = 0;
            renderTasks(projects, tasks);
        };
        this.edit = function() {
            let parent = document.querySelector(`.task${this.index}Form`);
            taskForm(parent, projects, this);
            editTasks(this.index);
        };
        this.delete = function() {
            tasks.splice(tasks.indexOf(this), 1);
            renderTasks(projects, tasks);
        };
    }
}

function newProjects() {
    const newProject = document.getElementById('newProject');
    const projectInput = document.createElement('input');
    const projectInputButton = document.createElement('button');

    projectInput.type = 'text';
    projectInput.placeholder = '+ new project';
    projectInput.id = 'projectInput';
    projectInput.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
            addProjects(projectInput);
        }
    });

    projectInputButton.textContent = '>';
    projectInputButton.id = 'projectInputButton';
    projectInputButton.addEventListener('click', () => addProjects(projectInput));

    newProject.appendChild(projectInput);
    newProject.appendChild(projectInputButton);
}

function addProjects(projectInput) {
    let valid = true;
    projects.forEach(project => {
        if (projectInput.value == project.name) {
            alert('this project already exists');
            projectInput.value = '';
            valid = false;
        }
    });
    if (projectInput.value.match(/^\s*$/)) valid = false;
    if (valid == true) {
        let proj = new project(projectInput.value, true, projectPalette[projects.length]);
        projectInput.value = '';
        projects.push(proj);
        projects.forEach(p => {
            if (p.name != proj.name) {
                p.selected = false;
            }
        });
        
        newTasks();
        renderNav(projects, tasks, proj.name);
        renderTasks(projects, tasks);
    }
}

function sortTasks() {
    const sortTasks = document.getElementById('sort');
    const newTask = document.getElementById('newTask');
    const sortTitle = document.createElement('div');
    const sortMenu = document.createElement('div');
    const sortMenuTitle = document.createElement('div');
    const creationSortButton = document.createElement('button');
    const progressSortButton = document.createElement('button');
    const prioritySortButton = document.createElement('button');
    const titleSortButton = document.createElement('button');
    const projectSortButton = document.createElement('button');
    const dueDateSortButton = document.createElement('button');

    sortTitle.id = 'sortTitle';
    sortMenu.id = 'sortMenu';
    sortMenuTitle.id = 'sortMenuTitle';

    sortMenuTitle.textContent = 'sort by'

    creationSortButton.textContent = 'creation order';
    creationSortButton.addEventListener('click', () => {
        tasks.sort((a, b) => {
            return a.index - b.index;
        });
        sortTasks.removeChild(sortTasks.lastChild);
        renderTasks(projects, tasks);
    });

    progressSortButton.textContent = 'progress';
    progressSortButton.addEventListener('click', () => {
        tasks.sort((a, b) => {
            return a.progress - b.progress || alphabeticalSort(a, b, 'title');
        });
        sortTasks.removeChild(sortTasks.lastChild);
        renderTasks(projects, tasks);
    });

    prioritySortButton.textContent = 'priority';
    prioritySortButton.addEventListener('click', () => {
        tasks.sort((a, b) => {
            return prioritySort(a, b) || alphabeticalSort(a, b, 'title');
        });
        sortTasks.removeChild(sortTasks.lastChild);
        renderTasks(projects, tasks);
    });

    titleSortButton.textContent = 'title';
    titleSortButton.addEventListener('click', () => {
        tasks.sort((a, b) => alphabeticalSort(a, b, 'title'));
        sortTasks.removeChild(sortTasks.lastChild);
        renderTasks(projects, tasks);
    });

    projectSortButton.textContent = 'project';
    projectSortButton.addEventListener('click', () => {
        tasks.sort();
        sortTasks.removeChild(sortTasks.lastChild);
        renderTasks(projects, tasks);
    });

    dueDateSortButton.textContent = 'due date';
    dueDateSortButton.addEventListener('click', () => {
        tasks.sort((a, b) => {
            return a.dueDate - b.dueDate;
        });
        sortTasks.removeChild(sortTasks.lastChild);
        renderTasks(projects, tasks);
    });

    function prioritySort(a, b) {
        if (a.priority == 'low' && b.priority == 'low') return 0;
        if (a.priority == 'low' && b.priority == 'med') return 1;
        if (a.priority == 'low' && b.priority == 'high') return 1
        if (a.priority == 'med' && b.priority == 'low') return -1;
        if (a.priority == 'med' && b.priority == 'med') return 0;
        if (a.priority == 'med' && b.priority == 'high') return 1;
        if (a.priority == 'high' && b.priority == 'low') return -1;
        if (a.priority == 'high' && b.priority == 'med') return -1;
        if (a.priority == 'high' && b.priority == 'high') return 0;
    }

    function alphabeticalSort(a, b, prop) {
        const titlaA = a[prop].toUpperCase();
        const titleB = b[prop].toUpperCase();
        if (titlaA < titleB) return -1;
        if (titlaA > titleB) return 1;
        return 0;
    }
    
    sortTitle.addEventListener('click', () => {
        if (sortTitle.nextSibling) {
            sortTasks.removeChild(sortTasks.lastChild);
        } else {
            sortTasks.appendChild(sortMenu);
        }
        if (newTask.firstChild != newTask.lastChild) {
            newTask.lastChild.innerHTML = '';
            newTask.removeChild(newTask.lastChild);
        }
    });

    sortMenu.appendChild(sortMenuTitle);
    sortMenu.appendChild(creationSortButton);
    sortMenu.appendChild(progressSortButton);
    sortMenu.appendChild(prioritySortButton);
    sortMenu.appendChild(titleSortButton);
    sortMenu.appendChild(projectSortButton);
    sortMenu.appendChild(dueDateSortButton);
    sortTitle.appendChild(sortIcon);
    sortTasks.appendChild(sortTitle);
}

function newTasks() {
    const newTask = document.getElementById('newTask');
    const sortTasks = document.getElementById('sort');
    const newTaskTitle = document.createElement('div');
    const newTaskForm = document.createElement('form');
    
    newTaskTitle.id = 'newTaskTitle';
    newTaskTitle.textContent = '+ new task';
    newTaskForm.id = 'newTaskForm';

    newTaskTitle.addEventListener('click', () => {
        if (newTaskTitle.nextSibling) {
            newTaskForm.innerHTML = '';
            newTask.removeChild(newTask.lastChild);
        } else {
            newTask.appendChild(taskForm(newTaskForm, projects));
            addTasks();
        }
        if (sortTasks.firstChild != sortTasks.lastChild) {
            sortTasks.removeChild(sortTasks.lastChild);
        }
    });
    
    newTask.innerHTML = '';
    newTask.appendChild(newTaskTitle);
}

function addTasks() {
    const newTaskForm = document.getElementById('newTaskForm');
    const addTaskButton = document.createElement('button');
    
    addTaskButton.id = 'addTaskButton';
    addTaskButton.textContent = 'add';
    addTaskButton.addEventListener('click', () => {
        formData(newTaskForm);
        newTask.removeChild(newTask.lastChild);
    });
    
    newTaskForm.id = 'newTaskForm';
    newTaskForm.appendChild(addTaskButton);

    return newTaskForm;
}

function editTasks(taskIndex) {
    const editTaskForm =  document.querySelector(`.task${taskIndex}Form`);
    const editTaskButton = document.createElement('button');

    editTaskButton.classList.add('editTaskButton');
    editTaskButton.textContent = 'confirm';
    editTaskButton.addEventListener('click', () => {
        formData(editTaskForm, taskIndex);
        editTaskForm.innerHTML = '';
    })

    editTaskForm.appendChild(editTaskButton);
}

function formData(form, taskIndex) {
    let formData = new Object();
    let formDividers = form.childNodes;
    let selection = 'all';
    
    formDividers.forEach((divider) => {
        let formItems = divider.childNodes;
        formItems.forEach((item) => {
            if (item.name == 'dueDate') {
                let formDueDate = new Date(`${item.value}T00:00:00`);
                formData[item.name] = formDueDate;
            } else formData[item.name] = item.value;
        });
    });
    
    //Add form validation- progress less than 0 and more than 100, character limit for title and description 
    
    if (form.id == 'newTaskForm') {
        let tsk = new task(formData.progress, formData.priority, formData.title, formData.project, formData.description, formData.dueDate, taskIndex++);
        tasks.push(tsk);

        projects.forEach(p => {
            if (formData.project == 'all') {
                p.selected = true;
            } else if (p.name != formData.project) {
                p.selected = false;
            } else {
                p.selected = true;
            }
        });
        selection = formData.project;
    } else {
        tasks.forEach(t => {
            if (t.index == taskIndex) {
                let editedTask = Object.assign(t, formData);
                t = editedTask;
            }
        });

        let allProj = {};
        projects.forEach(p => {
            if (p.name == 'all') {
                allProj = Object.assign(allProj, p);
            }
            if (allProj.selected != true) {
                if (p.selected == true) {
                    selection = p.name;
                }
            }
        });
    }
    
    form.innerHTML = '';
    renderNav(projects, tasks, selection);
    renderTasks(projects, tasks);
}

function defaults() {
    let proj1 = new project('project 1', true, projectPalette[projectIndex++]);
    projects.push(proj1);
    let proj2 = new project('project 2', true, projectPalette[projectIndex++]);
    projects.push(proj2);
    let proj3 = new project('project 3', true, projectPalette[projectIndex++]);
    projects.push(proj3);
    let description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    let tsk1 = new task(0, 'low', 'generic task name', 'project 1', description, new Date('2022-09-21T00:00:00'), taskIndex++);
    let tsk2 = new task(20, 'low', 'ayy lmao', 'project 2', description, new Date('2022-08-20T00:00:00'), taskIndex++);
    let tsk3 = new task(60, 'med', 'yo yo yo', 'project 3', description, new Date('2022-08-12T00:00:00'), taskIndex++);
    let tsk4 = new task(100, 'high', 'boiiiii', 'all', description, new Date('2022-08-11T00:00:00'), taskIndex++);

    tasks.push(tsk1);
    tasks.push(tsk2);
    tasks.push(tsk3);
    tasks.push(tsk4);
}

defaults();
render();
document.addEventListener('DOMContentLoaded', () => {
    newProjects();
    newTasks();
    sortTasks();
});
renderNav(projects, tasks, 'all');
renderTasks(projects, tasks);