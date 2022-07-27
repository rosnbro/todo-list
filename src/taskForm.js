function taskForm(parent, projects) {
    const inputLeft = document.createElement('fieldset');
    const inputRightOne = document.createElement('fieldset');
    const inputRightTwo = document.createElement('fieldset')

    const addToProjectLabel = document.createElement('label');
    const addToProject = document.createElement('select');

    const priorityLabel = document.createElement('label');
    const priorityInput = document.createElement('select');
    const lowPriority = document.createElement('option');
    const medPriority = document.createElement('option');
    const highPriority = document.createElement('option');

    const progressLabel = document.createElement('label');
    const progressInput = document.createElement('input');

    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');

    const descriptionLabel = document.createElement('label');
    const descriptionInput = document.createElement('textarea');

    const dueDateLabel = document.createElement('label');
    const dueDateInput = document.createElement('input');

    titleInput.required = true;
    titleInput.type = 'text';
    titleInput.name = 'title';
    titleLabel.for = 'title';
    titleLabel.textContent = 'title*';

    progressInput.type = 'number';
    progressInput.name = 'progress';
    progressInput.value = 0;
    progressLabel.for = 'progress';
    progressLabel.textContent = 'progress';

    descriptionInput.name = 'description';
    descriptionLabel.for = descriptionLabel.textContent = 'description';

    addToProject.required = true;
    addToProject.name = 'project';
    addToProjectLabel.for = 'project';
    addToProjectLabel.textContent = 'project*';
    
    projects.forEach(project => {
        let option = document.createElement('option');
        option.value = option.textContent = project.name;
        if (project.name == 'all') option.selected = true;
        addToProject.appendChild(option);
    });
    
    priorityInput.required = true;
    priorityInput.name = 'priority';
    priorityLabel.for = 'priority';
    priorityLabel.textContent = 'priority*';
    lowPriority.selected = true;
    lowPriority.value = lowPriority.textContent = 'low';
    medPriority.value = medPriority.textContent = 'med';
    highPriority.value = highPriority.textContent = 'high';
    priorityInput.appendChild(lowPriority);
    priorityInput.appendChild(medPriority);
    priorityInput.appendChild(highPriority);

    dueDateInput.required = true;
    dueDateInput.type = 'date';
    dueDateInput.name = 'dueDate';
    dueDateLabel.for = 'dueDate';
    dueDateLabel.textContent = 'due date*';
    //make current date the default due date
    //alert if selected date is in the past

    function clearForm() {
        descriptionInput.value = '';
        dueDateInput.value = '';
        titleInput.value = '';
        lowPriority.selected = true;
        addToProject.value = 'all';
    }

    inputLeft.id = 'textInput';
    inputRightOne.id = 'boxInputOne';
    inputRightTwo.id = 'boxInputTwo';

    inputLeft.appendChild(titleLabel);
    inputLeft.appendChild(titleInput);
    inputLeft.appendChild(descriptionLabel);
    inputLeft.appendChild(descriptionInput);
    
    inputRightOne.appendChild(addToProjectLabel);
    inputRightOne.appendChild(addToProject);
    inputRightOne.appendChild(priorityLabel);
    inputRightOne.appendChild(priorityInput);
    
    inputRightTwo.appendChild(dueDateLabel)
    inputRightTwo.appendChild(dueDateInput);
    inputRightTwo.appendChild(progressLabel);
    inputRightTwo.appendChild(progressInput);
    
    parent.appendChild(inputLeft);
    parent.appendChild(inputRightOne);
    parent.appendChild(inputRightTwo);

    return parent;
}

export default taskForm