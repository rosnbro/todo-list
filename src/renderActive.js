function renderActive(projects, tasks) {
    renderProjects(projects);
    renderTasks(projects, tasks);
}

function renderProjects(projects) {
    const projectContainer = document.getElementById('projectContainer');

    projects.forEach(project => {
        let projectSelector = document.createElement('div');
        projectSelector.classList.add('projectSelect');
        projectSelector.textContent = project.name;
        projectContainer.appendChild(projectSelector);
    });

    return projectContainer;
}

function renderTasks(projects, tasks) {
    const taskContainer = document.getElementById('taskContainer');
    
    tasks.forEach(task => {
        let taskItem = document.createElement('div');
        taskItem.classList.add('taskItem');
        taskItem.textContent = task.name;
        taskContainer.appendChild(taskItem);
    });

    return taskContainer;
}

export default renderActive;