import Delete from './delete.svg';
import Edit from './edit.svg';
import Check from './check.svg';

function renderPage(projects, tasks) {
    const pageContainer = document.getElementById('taskContainer');
    pageContainer.innerHTML = '';
    renderTasks(pageContainer, filterTasks(projects, tasks), projects);
    return pageContainer;
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
        let editButton = document.createElement('button');
        let deleteButton = document.createElement('button');
        let editTaskForm = document.createElement('div');
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
                            progressButton.textContent = `${task[prop]}%`;
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
                        dueDate.textContent = task[prop];
                        break;
                }
            }
        }

        progress.style.backgroundColor = projectColor;

        progressButton.style.borderColor = projectColor;
        progressButton.addEventListener('click', () => task.complete());

        textContainer.addEventListener('click', () => {
            taskContent.classList.toggle('expanded');
            description.classList.toggle('fullDescription');
        });

        deleteButton.appendChild(deleteIcon);
        deleteButton.addEventListener('click', () => task.delete());
        
        editButton.appendChild(editIcon); //add paper and pencil symbol
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