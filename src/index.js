import render from './render';
import renderNav from './renderNav';
import renderTasks from './renderTasks';
import taskForm from './taskForm';
import Sort from './sort.svg';
import Chevron from './chevron.svg';
import { isValid } from 'date-fns';
import './style.css';
//if using local storage try using object.assign to add object methods

let projects = [];
let projectIndex = 0;
let tasks = [];
let taskIndex = 0;
let projectPalette = ['#F76C5E', '#F68E5F', '#F5DD90', '#E8FFB7', '#48E5C2', '#50C5B7', /*'#69DDFF',*/ '#6495ED', '#D4C1EC', '#EC91D8', '#D66BA0'];
var sortCriteria = 'dueDate';
let sortIcon = new Image();
sortIcon.src = Sort;
let arrowIcon = new Image();
arrowIcon.src = Chevron;

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
                renderNav(projects, tasks, 'all', sortCriteria);
                renderTasks(projects, tasks, sortCriteria);
            } else {
                projects.splice(projects.indexOf(this), 1);
                tasks.forEach((t) => {
                    if (t.project == this.name) {
                        tasks.splice(tasks.indexOf(t), 1);
                    }
                });
                projects.forEach(p => p.selected = true);
                renderNav(projects, tasks, 'all', sortCriteria);
                renderTasks(projects, tasks, sortCriteria);
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
            renderNav(projects, tasks, currentProject(), sortCriteria);
            renderTasks(projects, tasks, sortCriteria);
        };
        this.edit = function() {
            let parent = document.querySelector(`.task${this.index}Form`);
            taskForm(parent, projects, this);
            editTasks(this.index);
        };
        this.delete = function() {
            tasks.splice(tasks.indexOf(this), 1);
            renderNav(projects, tasks, currentProject(), sortCriteria);
            renderTasks(projects, tasks, sortCriteria);
        };
    }
}

function newProjects() {
    const newProject = document.getElementById('newProject');
    const projectInput = document.createElement('input');
    const projectInputButton = document.createElement('button');

    projectInput.type = 'text';
    projectInput.placeholder = '+ new project';
    projectInput.maxLength = 25;
    projectInput.id = 'projectInput';
    projectInput.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
            addProjects(projectInput);
        }
    });

    projectInputButton.id = 'projectInputButton';
    projectInputButton.addEventListener('click', () => addProjects(projectInput));

    projectInputButton.appendChild(arrowIcon);
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
        renderNav(projects, tasks, proj.name, sortCriteria);
        renderTasks(projects, tasks, sortCriteria);
    }
}

function currentProject() {
    let currentProj;
    if (projects[0].selected == true) {
        currentProj = 'all';
    } else {
        projects.forEach(proj => {
            if (proj.selected == true) currentProj = proj.name;
        });
    }
    return currentProj;
}

function sortMenu() {
    const header = document.getElementById('header');
    const sort = document.getElementById('sort');
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
    dueDateSortButton.textContent = 'due date';
    progressSortButton.textContent = 'progress';
    prioritySortButton.textContent = 'priority';
    projectSortButton.textContent = 'project';
    titleSortButton.textContent = 'title';
    
    creationSortButton.addEventListener('click', () => handleSortClick('creationOrder'));
    dueDateSortButton.addEventListener('click', () => handleSortClick('dueDate'));
    progressSortButton.addEventListener('click', () => handleSortClick('progress'));
    prioritySortButton.addEventListener('click', () => handleSortClick('priority'));
    projectSortButton.addEventListener('click', () => handleSortClick('project'));
    titleSortButton.addEventListener('click', () => handleSortClick('title'));

    sortTitle.addEventListener('click', () => {
        if (header.childNodes.length > 2) {
            header.lastChild.remove();
        } else {
            header.appendChild(sortMenu);
        }
    });

    function handleSortClick(sortSelection) {
        header.removeChild(header.lastChild);
        sortCriteria = sortSelection;
        renderNav(projects, tasks, currentProject(), sortCriteria);
        renderTasks(projects, tasks, sortCriteria);
    }

    sortMenu.appendChild(sortMenuTitle);
    sortMenu.appendChild(creationSortButton);
    sortMenu.appendChild(progressSortButton);
    sortMenu.appendChild(prioritySortButton);
    sortMenu.appendChild(titleSortButton);
    sortMenu.appendChild(projectSortButton);
    sortMenu.appendChild(dueDateSortButton);
    sortTitle.appendChild(sortIcon);
    sort.appendChild(sortTitle);
}

function newTasks() {
    const newTask = document.getElementById('newTask');
    const sort = document.getElementById('sort');
    const newTaskTitle = document.createElement('div');
    const newTaskForm = document.createElement('form');
    
    newTaskTitle.textContent = '+ new task';
    newTaskTitle.id = 'newTaskTitle';
    newTaskForm.id = 'newTaskForm';

    newTaskTitle.addEventListener('click', () => {
        if (newTaskTitle.nextSibling) {
            newTaskForm.innerHTML = '';
            newTask.removeChild(newTask.lastChild);
        } else {
            newTask.appendChild(taskForm(newTaskForm, projects));
            addTasks();
        }
        if (sort.firstChild != sort.lastChild) {
            sort.removeChild(sort.lastChild);
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
    })

    editTaskForm.appendChild(editTaskButton);
}

function formData(form, taskIndex) {
    let formData = new Object();
    let formDividers = form.childNodes;
    let selection = 'all';
    let valid = true;
    let message = 'please fill out the required fields properly.';
    
    formDividers.forEach((divider) => {
        let formItems = divider.childNodes;
        formItems.forEach((item) => {
            if (item.name == 'dueDate') {
                let formDueDate = new Date(`${item.value}T00:00:00`);
                if (!isValid(formDueDate)) valid = false;
                formData[item.name] = formDueDate;
            } else {
                if (item.name == 'title') {
                    if (item.value.match(/^\s*$/)) valid = false;
                } else if (item.name == 'progress') {
                    if (item.value < 0 || item.value > 100) valid = false;
                }
                formData[item.name] = item.value;
            }
        });
    });
    
    if (valid) {
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
        if (newTaskTitle.nextSibling) newTask.removeChild(newTask.lastChild);
        renderNav(projects, tasks, selection, sortCriteria);
        renderTasks(projects, tasks, sortCriteria);

    } else alert(message);
}

function defaults() {
    let proj1 = new project('chores', true, projectPalette[projectIndex++]);
    let proj2 = new project('odin project', true, projectPalette[projectIndex++]);
    let proj3 = new project('hobbies', true, projectPalette[projectIndex++]);
    projects.push(proj1);
    projects.push(proj2);
    projects.push(proj3);
    let description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    let tsk1 = new task(0, 'low', 'vacuum living room', 'chores', description, new Date('2022-09-21T00:00:00'), taskIndex++);
    let tsk2 = new task(20, 'low', 'make bed', 'chores', description, new Date('2022-08-20T00:00:00'), taskIndex++);
    let tsk3 = new task(60, 'med', 'learn new piano piece', 'hobbies', description, new Date('2022-10-04T00:00:00'), taskIndex++);
    let tsk4 = new task(0, 'high', 'set reminder to remember to stop setting vague reminders', 'all', description, new Date('2022-09-16T00:00:00'), taskIndex++);
    let tsk5 = new task(100, 'high', 'boiiiii', 'all', description, new Date('2022-06-09T00:00:00'), taskIndex++);
    let tsk6 = new task(100, 'high', 'foundations', 'odin project', description, new Date('2022-06-11T00:00:00'), taskIndex++);
    let tsk7 = new task(33, 'high', 'full stack js', 'odin project', description, new Date('2022-12-25T00:00:00'), taskIndex++);
    tasks.push(tsk1);
    tasks.push(tsk2);
    tasks.push(tsk3);
    tasks.push(tsk4);
    tasks.push(tsk5);
    tasks.push(tsk6);
    tasks.push(tsk7);
}

defaults();
render();
document.addEventListener('DOMContentLoaded', () => {
    newProjects();
    newTasks();
    sortMenu();
});
renderNav(projects, tasks, 'all', sortCriteria);
renderTasks(projects, tasks, sortCriteria);