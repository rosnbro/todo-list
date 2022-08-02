import render from './render';
import renderNav from './renderNav';
import renderTasks from './renderTasks';
import taskForm from './taskForm';
import './style.css';

let projects = [];
let tasks = [];

class project {
    constructor(name, selected) {
        this.name = name;
        this.selected = selected;
        //Add color scheme for project. associated tasks the same color on 'all' page?
    }
}

let all = new project('all', true);
projects.push(all);

// ADD DELETE BUTTON TO PROJECTS THAT ALSO DELETE ASSOCIATED TASKS

class task {
    constructor(progress, priority, title, project, description, dueDate) {
        this.progress = progress;
        this.priority = priority;
        this.title = title;
        this.project = project;
        this.description = description;
        this.dueDate = dueDate;
        this.edit = function() {
            let parent = document.querySelector(`.${this.title}Form`);
            taskForm(parent, projects, this);  // check for duplicate task titles or this will mess up
            editTasks(this.title);
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

    projectInput.type = 'text';
    projectInput.placeholder = '+ new project';
    projectInput.id = 'projectInput';
    projectInput.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
            //Check for duplicate project names
            let proj = new project(projectInput.value, true);
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
    });

    newProject.appendChild(projectInput);
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

function editTasks(taskTitle) {
    const editTaskForm =  document.querySelector(`.${taskTitle}Form`);
    const editTaskButton = document.createElement('button');

    editTaskButton.classList.add('editTaskButton');
    editTaskButton.textContent = 'confirm';
    editTaskButton.addEventListener('click', () => {
        formData(editTaskForm, taskTitle);
        editTaskForm.innerHTML = '';
    })

    editTaskForm.appendChild(editTaskButton);
}

function formData(form, taskTitle) {
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
        let tsk = new task(formData.progress, formData.priority, formData.title, formData.project, formData.description, formData.dueDate);
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
            if (t.title == taskTitle) {
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
    let proj1 = new project('proj1', true);
    let proj2 = new project('proj2', true);
    let proj3 = new project('proj3', true);

    projects.push(proj1);
    projects.push(proj2);
    projects.push(proj3);

    let tsk1 = new task(0, 'low', 'task1', 'proj1', 'test description', '2022-07-30');
    let tsk2 = new task(20, 'low', 'task2', 'proj2', 'test description', '2022-07-30');
    let tsk3 = new task(60, 'med', 'task3', 'proj3', 'test description', '2022-07-30');
    let tsk4 = new task(100, 'high', 'task4', 'all', 'test description', '2022-07-30');

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