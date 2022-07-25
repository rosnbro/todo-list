import renderTasks from './renderTasks';

function renderNav(projects, tasks) {
    const projectMenu = document.getElementById('projectMenu');
    projectMenu.innerHTML = '';

    projects.forEach(project => {
        let projectSelector = document.createElement('div');
        projectSelector.classList.add('projectSelector');

        projectSelector.textContent = project.name;
        projectSelector.addEventListener('click', () => {
            if (project.name == 'all') {
                projects.forEach(proj => {
                    proj.selected = true;
                });
            } else {
                //project.selected = !project.selected; //toggle for multiple project selection
                projects.forEach(proj => {
                    proj.selected = false;
                });
                project.selected = true;
            }
            renderTasks(projects, tasks, project.name);
        });

        projectMenu.appendChild(projectSelector);
    });
    return projectMenu;
}

export default renderNav;