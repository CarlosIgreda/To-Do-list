import './styles.css';

const tasks = [
  {
    description: 'complete To Do list project',
    completed: false,
    index: 2,
  },
  {
    description: 'wash the dishes',
    completed: false,
    index: 1,
  },
];

const renderTasks = (tasks) => {
  const $taskList = document.querySelector('.ul-items');
  $taskList.innerHTML = '';
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task) => {
    const $taskListItem = document.createElement('li');
    $taskListItem.setAttribute('class', 'li-item');
    $taskListItem.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''}>
      <span class="span-text" contenteditable="true">${task.description}</span>
    `;
    const $spanButton = document.createElement('span');
    $spanButton.innerText = '፧';
    $spanButton.setAttribute('class', 'bt drag');
    $taskListItem.insertAdjacentElement('afterend', $spanButton);
    const $divItem = document.createElement('div');
    $divItem.setAttribute('class', 'div-item');
    $divItem.appendChild($taskListItem);
    $divItem.appendChild($spanButton);

    const checkbox = $taskListItem.querySelector('input[type = "checkbox"]');
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
    });
    $taskList.appendChild($divItem);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  renderTasks(tasks);
});