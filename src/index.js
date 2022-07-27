import render from './render';
import renderNav from './renderNav';
import renderTasks from './renderTasks';
import taskForm from './taskForm';
import './style.css';

let projects = [];
let tasks = [];

let allProjects = {
    name: 'all',
    selected: true,
};
projects.push(allProjects);

class project {
    constructor(name, selected) {
        this.name = name;
        this.selected = selected;
    }
}

// ADD DELETE BUTTON TO PROJECTS THAT ALSO DELETE ASSOCIATED TASKS

class task {
    constructor(progress, priority, title, project, description, dueDate) {
        this.progress = progress;
        this.priority = priority;
        this.title = title;
        this.project = project;
        this.description = description;
        this.dueDate = dueDate;
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
            let proj = new project(projectInput.value, true);
            projects.push(proj);
            projects.forEach(p => {
                if (p.name != proj.name) {
                    p.selected = false;
                }
            });
            newTasks();
            renderNav(projects, tasks);
            renderTasks(projects, tasks, proj.name);
            projectInput.value = '';
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
            taskAdder();
        }
    });
    
    newTask.innerHTML = '';
    newTask.appendChild(newTaskTitle);
}

function taskAdder() {
    const newTaskForm = document.getElementById('newTaskForm');
    const addNewTask = document.createElement('button');
    
    addNewTask.textContent = 'add';
    addNewTask.addEventListener('click', add);
    
    function add() {
        let formData = new Object();
        let formDividers = newTaskForm.childNodes;
        formDividers.forEach((divider) => {
            let formItems = divider.childNodes;
            formItems.forEach((item) => {
                formData[item.name] = item.value;
            });
        });
        
        let tsk = new task(formData.progress, formData.priority, formData.title, formData.project, formData.description, formData.dueDate);
        tasks.push(tsk);
        
        newTaskForm.innerHTML = '';
        newTask.removeChild(newTask.lastChild);
        renderNav(projects, tasks);
        renderTasks(projects, tasks, 'all');
    }
    
    newTaskForm.id = 'newTaskForm';
    newTaskForm.appendChild(addNewTask);

    return newTaskForm;
}

function defaults() {
    let proj1 = {
        name: 'proj1',
        selected: true,
    };
    let proj2 = {
        name: 'proj2',
        selected: true,
    };
    let proj3 = {
        name: 'proj3',
        selected: true,
    };
    projects.push(proj1);
    projects.push(proj2);
    projects.push(proj3);

    let task1 = {
        title: 'task1',
        project: 'proj1',
    };
    let task2 = {
        title: 'task2',
        project: 'proj2',
    };
    let task3 = {
        title: 'task3',
        project: 'proj3',
    };
    let task4 = {
        title: 'task4',
        project: 'all',
    }
    tasks.push(task1);
    tasks.push(task2);
    tasks.push(task3);
    tasks.push(task4);
}

defaults();
render();
document.addEventListener('DOMContentLoaded', () => {
    newProjects();
    newTasks();
});
renderNav(projects, tasks);
renderTasks(projects, tasks, 'all');