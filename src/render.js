function render() {
    renderSidebar();
    renderMain();
}

function renderSidebar() {
    const sidebar = document.getElementById('sidebar');
    const title = document.createElement('div');
    const projectContainer = document.createElement('div');
    const projectTitle = document.createElement('div');
    const projectMenu = document.createElement('div');
    const newProject = document.createElement('div');
    
    title.id = 'title';
    projectContainer.id = 'projectContainer';
    projectTitle.id = 'projectTitle';
    projectMenu.id = 'projectMenu';
    newProject.id = 'newProject';

    title.textContent = 'tsk';
    projectTitle.textContent = 'Projects:';

    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(projectMenu);
    projectContainer.appendChild(newProject);
    sidebar.appendChild(title);
    sidebar.appendChild(projectContainer);
    return sidebar;
}

function renderMain() {
    const main = document.getElementById('main');
    const newTask = document.createElement('div');
    const taskContainer = document.createElement('div');

    newTask.id = 'newTask';
    taskContainer.id = 'taskContainer';

    main.appendChild(newTask);
    main.appendChild(taskContainer);
    return main;
}

export default render;