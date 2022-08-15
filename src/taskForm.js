import { formatISO } from 'date-fns';

function taskForm(parent, projects, taskData) {
    const progressLabel = document.createElement('label');
    const progressInput = document.createElement('input');

    const priorityLabel = document.createElement('label');
    const priorityInput = document.createElement('select');
    const lowPriority = document.createElement('option');
    const medPriority = document.createElement('option');
    const highPriority = document.createElement('option');

    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');

    const addToProjectLabel = document.createElement('label');
    const addToProject = document.createElement('select');

    const descriptionLabel = document.createElement('label');
    const descriptionInput = document.createElement('textarea');

    const dueDateLabel = document.createElement('label');
    const dueDateInput = document.createElement('input');

    if (taskData) {
        progressInput.value = taskData.progress;
        switch (taskData.priority) {
            case 'low':
                lowPriority.selected = true;
                break;
            case 'med':
                medPriority.selected = true;
                break;
            case 'high':
                highPriority.selected = true;
                break;
        }
        titleInput.value = taskData.title;
        descriptionInput.value = taskData.description;
        dueDateInput.value = formatISO(taskData.dueDate, {representation: 'date'});
    } else {
        progressInput.value = 0;
        lowPriority.selected = true;
        titleInput.value = '';
        descriptionInput.value = '';
    }

    progressInput.type = 'number';
    progressInput.name = 'progress';
    progressInput.min = 0;
    progressInput.max = 100;
    progressLabel.for = 'progress';
    progressLabel.textContent = 'progress (%)';

    priorityInput.required = true;
    priorityInput.name = 'priority';
    priorityLabel.for = 'priority';
    priorityLabel.textContent = 'priority*';
    lowPriority.value = lowPriority.textContent = 'low';
    medPriority.value = medPriority.textContent = 'med';
    highPriority.value = highPriority.textContent = 'high';
    priorityInput.appendChild(lowPriority);
    priorityInput.appendChild(medPriority);
    priorityInput.appendChild(highPriority);

    titleInput.required = true;
    titleInput.type = 'text';
    titleInput.maxLength = 50;
    titleInput.name = 'title';
    titleLabel.for = 'title';
    titleLabel.textContent = 'title*';

    addToProject.required = true;
    addToProject.name = 'project';
    addToProjectLabel.for = 'project';
    addToProjectLabel.textContent = 'project*';
    projects.forEach(project => {
        let option = document.createElement('option');
        option.value = option.textContent = project.name;
        if (taskData) {
            if (taskData.project == project.name) {
                option.selected = true;
            } 
        } else {
            let projectNavs = document.querySelectorAll('.projectSelector');
            projectNavs.forEach(nav => {
                if (nav.classList.contains('selected')) {
                    if (nav.textContent == project.name) {
                        option.selected = true;
                    }
                }
            })
        }
        addToProject.appendChild(option);
    });

    descriptionInput.name = 'description';
    descriptionInput.rows = 4;
    descriptionInput.maxLength = 300;
    descriptionLabel.for = descriptionLabel.textContent = 'description';

    dueDateInput.required = true;
    dueDateInput.type = 'date';
    dueDateInput.name = 'dueDate';
    dueDateLabel.for = 'dueDate';
    dueDateLabel.textContent = 'due date*';
    
    grouper(progressLabel, progressInput, 'progressInput');
    grouper(priorityLabel, priorityInput, 'priorityInput');
    grouper(titleLabel, titleInput, 'titleInput');
    grouper(addToProjectLabel, addToProject, 'addToProjectInput');
    grouper(descriptionLabel, descriptionInput, 'descriptionInput');
    grouper(dueDateLabel, dueDateInput, 'dueDateInput');
    
    function grouper(child1, child2, id) {
        let p = document.createElement('p');
        p.classList.add(id);
        p.appendChild(child1);
        p.appendChild(child2);
        parent.appendChild(p);
    }

    return parent;
}

export default taskForm