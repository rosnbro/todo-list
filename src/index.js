import render from './render';
import renderNav from './renderNav';
import renderTasks from './renderTasks';
import './style.css';

let projects = [];
let tasks = [];

let allProjects = {
    name: 'All',
    selected: true,
};
projects.push(allProjects);

class project {
    constructor(name, selected) {
        this.name = name;
        this.selected = selected;
    }
}

class task {
    constructor(name, project) {
        this.name = name;
        this.project = project;
    }
}

function newProjects(projects, tasks) {
    const newProject = document.getElementById('newProject');
    const projectInput = document.createElement('input');

    projectInput.type = 'text';
    projectInput.placeholder = '+ new project';
    projectInput.id = 'projectInput';
    projectInput.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
            let proj = new project(projectInput.value, true);
            projects.push(proj);
            renderNav(projects, tasks);
            renderTasks(projects, tasks, 'All');
            projectInput.value = '';
        }
    });

    newProject.appendChild(projectInput);
}

function newTasks(projects, tasks) {
    const newTask = document.getElementById('newTask');
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
        name: 'task1',
        project: 'proj1',
    };
    let task2 = {
        name: 'task2',
        project: 'proj2',
    };
    let task3 = {
        name: 'task3',
        project: 'proj3',
    };
    let task4 = {
        name: 'task4',
        project: 'All',
    }
    tasks.push(task1);
    tasks.push(task2);
    tasks.push(task3);
    tasks.push(task4);
}

defaults();
render();
newProjects(projects, tasks);
renderNav(projects, tasks);
renderTasks(projects, tasks, 'All');