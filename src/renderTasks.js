import Delete from './delete.svg';
import Edit from './edit.svg';
import Check from './check.svg';
import { intlFormatDistance, isPast } from 'date-fns';

function renderPage(projects, tasks, sortCriteria) {
    const pageContainer = document.getElementById('taskContainer');
    pageContainer.innerHTML = '';
    tasks.sort((a, b) => sorter(a, b, sortCriteria));
    renderTasks(pageContainer, filterTasks(projects, tasks), projects);
    return pageContainer;
}

function sorter(a, b, sortCriteria) {
    switch (sortCriteria) {
        case 'creationOrder':
            return a.index - b.index;

        case 'priority':
            return priorityLogic(a, b);

        case 'progress':
            return b.progress - a.progress;

        case 'project':
            return alphabeticalLogic(a, b, 'project');

        case 'title':
            return alphabeticalLogic(a, b, 'title');
    
        default: 'dueDate'
            return a.dueDate - b.dueDate;
    } 

    function alphabeticalLogic(a, b, prop) {
        const titlaA = a[prop].toUpperCase();
        const titleB = b[prop].toUpperCase();
        if (titlaA < titleB) return -1;
        if (titlaA > titleB) return 1;
        return 0;
    }

    function priorityLogic(a, b) {
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
}

function filterTasks(projects, tasks) {
    return tasks.filter(task => {
        return projects.find(project => {
            if (project.selected == true) {
                return project.name === task.project;
            }
        });
    });
}

function renderTasks(wrapper, tasks, projects) {
    tasks.forEach(task => {
        let taskBox = document.createElement('div');
        let taskContent = document.createElement('div');
        let progressContainer = document.createElement('div');
        let progress = document.createElement('div');
        let progressButton = document.createElement('button');
        let priority = document.createElement('div');
        let textContainer = document.createElement('div');
        let title = document.createElement('div');
        let project = document.createElement('div');
        let description = document.createElement('div');
        let rightContainer = document.createElement('div');
        let dueDate = document.createElement('div');
        let dateText = document.createElement('div');
        let dateNums = document.createElement('div');
        let editButton = document.createElement('button');
        let deleteButton = document.createElement('button');
        let editTaskForm = document.createElement('form');
        let projectColor;

        let deleteIcon = new Image();
        let editIcon = new Image();
        let checkIcon = new Image();
        deleteIcon.src = Delete;
        editIcon.src = Edit;
        checkIcon.src = Check;

        taskBox.classList.add('task');
        taskContent.classList.add('taskContent');
        progressContainer.classList.add('progressContainer');
        progress.classList.add('progress');
        progressButton.classList.add('progressButton');
        priority.classList.add('priority');
        textContainer.classList.add('textContainer');
        title.classList.add('taskTitle');
        project.classList.add('taskProject');
        description.classList.add('taskDescription');
        rightContainer.classList.add('rightContainer');
        dueDate.classList.add('dueDate');
        deleteButton.classList.add('deleteButton');
        editButton.classList.add('editButton');
        editTaskForm.classList.add('editTaskForm');
        editTaskForm.classList.add(`task${task.index}Form`);
        
        for (const prop in task) {
            if (Object.hasOwnProperty.call(task, prop)) {
                switch (prop) {
                    case 'progress':
                        progress.style.width = `${task[prop]}%`;
                        if (task[prop] == 100) { 
                            progressButton.appendChild(checkIcon);
                        } else {
                            progressButton.innerHTML = '';
                            progressButton.textContent = `${task[prop]}`;
                        }
                        break;
                    case 'priority':
                        switch (task[prop]) {
                            case 'med':
                                priority.classList.add('medPriority');
                                break;
                            case 'high':
                                priority.classList.add('highPriority');
                                break;
                            default: 'low'
                                priority.classList.add('lowPriority');
                                break;
                        }
                        break;
                    case 'title':
                        title.textContent = task[prop];
                        break;
                    case 'project':
                        project.textContent = task[prop];
                        projects.forEach((project) => {
                            if (task[prop] == project.name) projectColor = project.color;
                        })
                        break;
                    case 'description':
                        description.textContent = task[prop];
                        break;
                    case 'dueDate':
                        let today = new Date();
                        let year = task[prop].getUTCFullYear();
                        let month = task[prop].getUTCMonth() + 1;
                        let day = task[prop].getUTCDate();
                        let date = month + '/' + day + '/' + year;
                        dateNums.textContent = date;

                        if (isPast(task[prop])) {
                            if (task.progress == 100) {

                            } else {
                                dateText.style.color = 'red';
                                dateNums.style.color = 'red';
                            }
                        };

                        if  (year == today.getUTCFullYear() 
                            && month == today.getUTCMonth() + 1
                            && day == today.getUTCDate()) {
                                dateText.textContent = 'due today';
                        } else {
                            dateText.textContent = 'due ' + intlFormatDistance(task[prop], today);
                        }
                        break;
                }
            }
        }

        progress.style.backgroundColor = projectColor;

        progressButton.style.borderColor = projectColor;
        progressButton.addEventListener('click', () => task.complete());

        textContainer.addEventListener('click', () => expand());
        rightContainer.addEventListener('click', () => expand());

        function expand() {
            taskContent.classList.toggle('expanded');
            title.classList.toggle('fullDescription');
            project.classList.toggle('fullDescription');
            description.classList.toggle('fullDescription');
            
            if (dueDate.childNodes.length > 1) {
                dueDate.lastChild.remove();
                dateText.textContent = dateText.textContent.slice(0, -1);
            } else {
                dueDate.appendChild(dateNums);
                dateText.textContent += ',';
            }
        }

        deleteButton.appendChild(deleteIcon);
        deleteButton.addEventListener('click', () => task.delete());
        
        editButton.appendChild(editIcon);
        editButton.addEventListener('click', () => {
            if (editTaskForm.hasChildNodes()) {
                editTaskForm.innerHTML = '';
            } else task.edit();
        });

        progressContainer.appendChild(progress);
        progressContainer.appendChild(progressButton);
        textContainer.appendChild(title);
        textContainer.appendChild(project);
        textContainer.appendChild(description);
        dueDate.appendChild(dateText);
        rightContainer.appendChild(dueDate);
        rightContainer.appendChild(deleteButton);
        rightContainer.appendChild(editButton);
        taskContent.appendChild(progressContainer);
        taskContent.appendChild(priority);
        taskContent.appendChild(textContainer);
        taskContent.appendChild(rightContainer);
        taskBox.appendChild(taskContent);
        taskBox.appendChild(editTaskForm);
        wrapper.appendChild(taskBox);
    });
    
    return wrapper;
}

export default renderPage;