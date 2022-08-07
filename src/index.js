import render from './render';
import renderNav from './renderNav';
import renderTasks from './renderTasks';
import taskForm from './taskForm';
import './style.css';
//if using local storage try using object.assign to add object methods

let projects = [];
let tasks = [];
let projectPalette = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let i = 0;

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
                })
                renderNav(projects, tasks, 'all');
                renderTasks(projects, tasks);
            }
        }
    }
}

let all = new project('all', true, projectPalette[projects.length]);
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

function newTasks() {
    const newTask = document.getElementById('newTask');
    const newTaskTitle = document.createElement('div');
    const newTaskForm = document.createElement('div');
    
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
            formData[item.name] = item.value;
        });
    });
    //Add form validation checking new task against all current tasks to check for duplicates
    if (form.id == 'newTaskForm') {
        let tsk = new task(formData.progress, formData.priority, formData.title, formData.project, formData.description, formData.dueDate, i++);
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
    let proj1 = new project('project 1', true, projectPalette[projects.length]);
    projects.push(proj1);
    let proj2 = new project('project 2', true, projectPalette[projects.length]);
    projects.push(proj2);
    let proj3 = new project('project 3', true, projectPalette[projects.length]);
    projects.push(proj3);
    let description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    let tsk1 = new task(0, 'low', 'task1', 'project 1', description, '2022-07-30', i++);
    let tsk2 = new task(20, 'low', 'task2', 'project 2', 'test description', '2022-07-30', i++);
    let tsk3 = new task(60, 'med', 'task3', 'project 3', description, '2022-07-30', i++);
    let tsk4 = new task(100, 'high', 'task4', 'all', 'test description', '2022-07-30', i++);

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
});
renderNav(projects, tasks, 'all');
renderTasks(projects, tasks);