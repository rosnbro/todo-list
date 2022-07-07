import render from './render';
import './style.css';

let projects = [];
let tasks = [];

//test items
let test1 = {
    name: 'test1',
};
let test2 = {
    name: 'test2',
};
let test3 = {
    name: 'test3',
};

projects.push(test1);
projects.push(test2);
projects.push(test3);

render(projects, tasks);