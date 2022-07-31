import renderTasks from './renderTasks';

function renderNav(projects, tasks, selection) {
    const projectMenu = document.getElementById('projectMenu');
    projectMenu.innerHTML = '';

    projects.forEach(project => {
        let projectSelector = document.createElement('div');
        projectSelector.classList.add('projectSelector');

        projectSelector.textContent = project.name;
        if (project.name == selection) projectSelector.classList.add('selected');

        projectSelector.addEventListener('click', () => {
            if (project.name == 'all') {
                projects.forEach(proj => {
                    proj.selected = true;
                });
            } else {
                projects.forEach(proj => {
                    proj.selected = false;
                });
                project.selected = true;
            }

            let navs = projectMenu.childNodes;
            navs.forEach(nav => nav.classList.remove('selected'));
            projectSelector.classList.add('selected');

            renderTasks(projects, tasks, project.name);
        });

        projectMenu.appendChild(projectSelector);
    });
    return projectMenu;
}

export default renderNav;