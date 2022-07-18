function renderNav(projects) {
    const projectMenu = document.getElementById('projectMenu');

    projects.forEach(project => {
        let projectSelector = document.createElement('div');
        projectSelector.classList.add('projectSelector');
        projectSelector.textContent = project.name;
        projectMenu.appendChild(projectSelector);
    });

    return projectMenu;
}

export default renderNav;