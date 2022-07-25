import render from './render';
import renderNav from './renderNav';
import renderTasks from './renderTasks';
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
    constructor(description, dueDate, name, priority, project,) {
        this.description = description;
        this.dueDate = dueDate;
        this.name = name;
        this.priority = priority;
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
            projects.forEach(p => {
                if (p.name != proj.name) {
                    p.selected = false;
                }
            });
            newTasks(projects, tasks);
            renderNav(projects, tasks);
            renderTasks(projects, tasks, proj.name);
            projectInput.value = '';
        }
    });

    newProject.appendChild(projectInput);
}

function newTasks(projects, tasks) {
    const newTask = document.getElementById('newTask');
    const newTaskTitle = document.createElement('div');
    const newTaskForm = document.createElement('div');
    const inputLeft = document.createElement('div');
    const inputRight = document.createElement('div');
    const addToProjectLabel = document.createElement('label');
    const addToProject = document.createElement('select');
    const priorityLabel = document.createElement('label');
    const priorityInput = document.createElement('select');
    const lowPriority = document.createElement('option');
    const medPriority = document.createElement('option');
    const highPriority = document.createElement('option');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');
    const descriptionLabel = document.createElement('label');
    const descriptionInput = document.createElement('textarea');
    const dueDateLabel = document.createElement('label');
    const dueDateInput = document.createElement('input');
    const addNewTask = document.createElement('button');

    titleInput.required = true;
    titleInput.type = 'text';
    titleInput.name = 'title';
    titleLabel.for = 'title';
    titleLabel.textContent = 'title*';

    descriptionInput.name = 'description';
    descriptionLabel.for = descriptionLabel.textContent = 'description';

    addToProject.required = true;
    addToProject.name = 'project';
    addToProjectLabel.for = 'project';
    addToProjectLabel.textContent = 'project*';
    projects.forEach(project => {
        let option = document.createElement('option');
        option.value = option.textContent = project.name;
        if (project.name == 'all') option.selected = true;
        addToProject.appendChild(option);
    });

    priorityInput.required = true;
    priorityInput.name = 'priority';
    priorityLabel.for = 'priority';
    priorityLabel.textContent = 'priority*';
    lowPriority.selected = true;
    lowPriority.value = lowPriority.textContent = 'low';
    medPriority.value = medPriority.textContent = 'med';
    highPriority.value = highPriority.textContent = 'high';
    priorityInput.appendChild(lowPriority);
    priorityInput.appendChild(medPriority);
    priorityInput.appendChild(highPriority);

    dueDateInput.required = true;
    dueDateInput.type = 'date';
    dueDateInput.name = 'dueDate';
    dueDateLabel.for = 'dueDate';
    dueDateLabel.textContent = 'due date*';
    //make current date the default due date

    addNewTask.textContent = 'add';
    addNewTask.addEventListener('click', taskAdder);

    function taskAdder() {
        let tsk = new task(descriptionInput.value, dueDateInput.value, titleInput.value, priorityInput.value, addToProject.value);
        console.log(tsk);
        console.log(tasks);
        tasks.push(tsk);
        renderNav(projects, tasks);
        renderTasks(projects, tasks, addToProject.value);
    }

    inputLeft.classList.add('inputField');
    inputLeft.appendChild(titleLabel);
    inputLeft.appendChild(titleInput);
    inputLeft.appendChild(descriptionLabel);
    inputLeft.appendChild(descriptionInput);
    inputRight.classList.add('inputField');
    inputRight.appendChild(addToProjectLabel);
    inputRight.appendChild(addToProject);
    inputRight.appendChild(priorityLabel);
    inputRight.appendChild(priorityInput);
    inputRight.appendChild(dueDateLabel)
    inputRight.appendChild(dueDateInput);
    inputRight.appendChild(addNewTask);
    newTaskForm.id = 'newTaskForm';
    newTaskForm.appendChild(inputLeft);
    newTaskForm.appendChild(inputRight);

    newTaskTitle.id = 'newTaskTitle';
    newTaskTitle.textContent = '+ new task';
    newTaskTitle.addEventListener('click', () => newTask.appendChild(newTaskForm));

    newTask.innerHTML = '';
    newTask.appendChild(newTaskTitle);
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
        project: 'all',
    }
    tasks.push(task1);
    tasks.push(task2);
    tasks.push(task3);
    tasks.push(task4);
}

defaults();
render();
newProjects(projects, tasks);
newTasks(projects, tasks);
renderNav(projects, tasks);
renderTasks(projects, tasks, 'all');