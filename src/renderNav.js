function renderNav(projects) {
    const projectNavContainer = document.getElementById('projectNavContainer');

    projects.forEach(project => {
        let projectNav = document.createElement('div');
        projectNav.classList.add('projectNav');
        projectNav.textContent = project.name;
        projectNavContainer.appendChild(projectNav);
    });

    return projectNavContainer;
}

export default renderNav;