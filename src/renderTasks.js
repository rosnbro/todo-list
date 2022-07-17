function renderProjects(projects, tasks, selection) {
    const projectContainer = document.getElementById('ProjectContainer');
    projectContainer.textContent = selection;
    renderTasks(projectContainer, filterTasks(projects, tasks));
    return projectContainer;
}

function filterTasks(projects, tasks) {
    return tasks.filter(task => {
        return projects.find(project => {
            return project.name === task.project;
        });
    });
}

function renderTasks(wrapper, tasks) {
    tasks.forEach(task => {
        let taskItem = document.createElement('div');
        taskItem.classList.add('task');
        taskItem.textContent = task.name;
        wrapper.appendChild(taskItem);
    });
    return wrapper;
}

export default renderProjects;