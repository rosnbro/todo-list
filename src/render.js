function render(projects, tasks) {
    const content = document.getElementById('content');

    content.innerHTML = '';

    content.appendChild(renderSidebar(projects));
    content.appendChild(renderHeader(projects));
    content.appendChild(renderMain(projects, tasks));
    return content;
}

function renderSidebar(projects) {
    const sidebar = document.createElement('div');
    const title = document.createElement('h1');
    const projectContainer = document.createElement('div');

    sidebar.classList.add('sidebar');

    title.textContent = 'Task Title';

    projects.forEach(project => {
        let projectSelect = document.createElement('div');
        projectSelect.textContent = project.name;
        projectContainer.appendChild(projectSelect);
    });

    sidebar.appendChild(title);
    sidebar.appendChild(projectContainer);
    return sidebar;
}

function renderHeader() {
    const header = document.createElement('header');

    return header;
}

function renderMain(projects, tasks) {
    const main = document.createElement('main');

    return main;
}

export default render;