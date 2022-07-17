import render from './render';
import renderNav from './renderNav';
import renderTasks from './renderTasks';
import './style.css';

let projects = [];
let tasks = [];

let allProjects = {
    name: 'All',
};
projects.push(allProjects);

//test projects
let proj1 = {
    name: 'proj1',
};
let proj2 = {
    name: 'proj2',
};
let proj3 = {
    name: 'proj3',
};
projects.push(proj1);
//projects.push(proj2);
projects.push(proj3);

//test tasks
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

render();
renderNav(projects);
renderTasks(projects, tasks, "All");