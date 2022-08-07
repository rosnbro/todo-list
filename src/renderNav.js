import renderTasks from './renderTasks';
import Delete from './delete.svg';

function renderNav(projects, tasks, selection) {
    const projectMenu = document.getElementById('projectMenu');
    projectMenu.innerHTML = '';

    projects.forEach(project => {
        let projectSelector = document.createElement('div');
        let projectName = document.createElement('div');
        let projectDeleteButton = document.createElement('button');

        let deleteIcon = new Image();
        deleteIcon.src = Delete;

        projectSelector.classList.add('projectSelector');
        projectSelector.style.backgroundColor = project.color;
        if (project.name == selection) projectSelector.classList.add('selected');

        projectName.textContent = project.name;
        projectName.classList.add('projectName');
        projectName.addEventListener('click', () => {
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

            renderTasks(projects, tasks);
        });

        projectDeleteButton.appendChild(deleteIcon);
        projectDeleteButton.classList.add('projectDeleteButton');
        //projectDeleteButton.style.borderColor = project.color;
        projectDeleteButton.addEventListener('click', () => {
            project.delete();
        });

        projectSelector.appendChild(projectName);
        projectSelector.appendChild(projectDeleteButton);
        projectMenu.appendChild(projectSelector);
    });
    return projectMenu;
}

export default renderNav;