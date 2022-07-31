function renderPage(projects, tasks) {
    const pageContainer = document.getElementById('taskContainer');
    pageContainer.innerHTML = '';
    renderTasks(pageContainer, filterTasks(projects, tasks));
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

function renderTasks(wrapper, tasks) {
    tasks.forEach(task => {
        let taskItem = document.createElement('div');
        let textContainer = document.createElement('div');
        let rightContainer = document.createElement('div');
        let editButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        textContainer.classList.add('textContainer');
        rightContainer.classList.add('rightContainer');
        taskItem.classList.add('task');
        
        for (const prop in task) {
            if (Object.hasOwnProperty.call(task, prop)) {
                switch (prop) {
                    case 'progress':
                        let progressContainer = document.createElement('div');
                        let progress = document.createElement('div');

                        progressContainer.classList.add('progressContainer');
                        progress.classList.add('progress');
                        progress.style.height = `${task[prop]}%`;

                        progressContainer.appendChild(progress);
                        taskItem.appendChild(progressContainer);
                        break;

                    case 'priority':
                        let priority = document.createElement('div');
                        priority.classList.add('priority');
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
                        taskItem.appendChild(priority);
                        break;

                    case 'title':
                        let title = document.createElement('div');
                        title.textContent = task[prop];
                        textContainer.appendChild(title);
                        break;

                    case 'project':
                        let project = document.createElement('div');
                        project.textContent = task[prop];
                        textContainer.appendChild(project);
                        break;

                    case 'description':
                        let description = document.createElement('div');
                        description.textContent = task[prop];
                        textContainer.appendChild(description);
                        break;

                    case 'dueDate':
                        let dueDate = document.createElement('div');
                        dueDate.textContent = task[prop];
                        dueDate.id = 'dueDate';
                        rightContainer.appendChild(dueDate);
                        break;
                }
            }
        }

        deleteButton.textContent = 'delete'; //add trash can symbol
        deleteButton.addEventListener('click', () => task.delete());
        rightContainer.appendChild(deleteButton);

        editButton.textContent = 'edit'; //add paper and pencil symbol
        rightContainer.appendChild(editButton);

        taskItem.appendChild(textContainer);
        taskItem.appendChild(rightContainer);
        wrapper.appendChild(taskItem);
    });
    return wrapper;
}

export default renderPage;