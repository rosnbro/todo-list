function render() {
    renderSidebar();
    renderMain();
}

function renderSidebar() {
    const sidebar = document.getElementById('sidebar');
    const title = document.createElement('h1');
    const projectNavContainer = document.createElement('div');
    const projectTitle = document.createElement('h3');

    projectTitle.classList.add('projectTitle');
    projectNavContainer.id = 'projectNavContainer';

    title.textContent = 'TITLE';
    projectTitle.textContent = 'Projects:';

    projectNavContainer.appendChild(projectTitle);
    sidebar.appendChild(title);
    sidebar.appendChild(projectNavContainer);
    return sidebar;
}

function renderMain() {
    const main = document.getElementById('main');
    const newTask = document.createElement('div');
    const ProjectContainer = document.createElement('div');

    newTask.classList.add('newTask');
    ProjectContainer.id = 'ProjectContainer';

    main.appendChild(newTask);
    main.appendChild(ProjectContainer);
    return main;
}

export default render;