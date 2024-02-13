function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.textContent = taskInput.value;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
}