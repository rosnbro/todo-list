function render() {
    renderSidebar();
    renderMain();
}

function renderSidebar() {
    const sidebar = document.getElementById('sidebar');
    const title = document.createElement('h1');
    const projectContainer = document.createElement('div');
    const projectTitle = document.createElement('h3');

    projectTitle.classList.add('projectTitle');
    projectContainer.id = 'projectContainer';

    title.textContent = 'TITLE';
    projectTitle.textContent = 'Projects:';

    projectContainer.appendChild(projectTitle);
    sidebar.appendChild(title);
    sidebar.appendChild(projectContainer);
    return sidebar;
}

function renderMain() {
    const main = document.getElementById('main');
    const newTask = document.createElement('div');
    const taskContainer = document.createElement('div');

    newTask.classList.add('newTask');
    taskContainer.id = 'taskContainer';

    main.appendChild(newTask);
    main.appendChild(taskContainer);
    return main;
}

export default render;