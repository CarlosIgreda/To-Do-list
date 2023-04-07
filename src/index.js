import './styles.css';
import { addTask, deleteTaskByIndex, editTask } from './functionality.js';
import saveTasks from './save.js';
import { addCheckboxEventListener, handlerClearText } from './status.js';

// Get the task list from local storage or initialize it to an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Select the necessary HTML elements
const ul = document.querySelector('.ul-items');
const addInput = document.querySelector('.add-item');
const enter = document.querySelector('.enter');
const clearText = document.querySelector('.clear-text');

// Define a function to render the tasks in the UI
const renderTasks = (tasks) => {
  ul.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'li-item');
    const checkbox = document.createElement('input');
    const input = document.createElement('input');
    input.setAttribute('class', 'input-text');
    const button = document.createElement('button');
    const trash = document.createElement('button');
    const trashDrag = document.createElement('div');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    input.value = task.description;
    button.textContent = '፧';
    button.setAttribute('class', 'bt button-item');
    trash.setAttribute('class', 'bt trash-icon');
    trash.dataset.index = index;
    trashDrag.setAttribute('class', 'trash-drag');
    const divItem = document.createElement('div');
    divItem.setAttribute('class', 'div-item');
    li.appendChild(checkbox);
    li.appendChild(input);
    trashDrag.appendChild(trash);
    trashDrag.appendChild(button);
    divItem.appendChild(li);
    divItem.appendChild(trashDrag);
    ul.appendChild(divItem);

    // Add event listeners for the checkbox, input and buttons
    addCheckboxEventListener(checkbox, task, input, tasks);

    input.addEventListener('click', () => {
      divItem.style.backgroundColor = 'lightgoldenrodyellow';
      input.style.backgroundColor = 'lightgoldenrodyellow';
      button.style.display = 'none';
      trash.style.display = 'block';
    });

    trash.addEventListener('click', (event) => {
      const { index } = event.target.dataset;
      tasks = deleteTaskByIndex(index, tasks);
      saveTasks(tasks);
      renderTasks(tasks);
    });

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && input.value) {
        tasks = editTask(index, input.value, tasks);
        saveTasks(tasks);
        divItem.style.backgroundColor = '#fff';
        input.style.backgroundColor = '#fff';
        button.style.display = 'block';
        trash.style.display = 'none';
      }
    });

    if (task.completed === true) {
      input.classList.toggle('activated');
    }
  });
};

// Render the initial tasks
renderTasks(tasks);

// Add event listener for adding a new task
addInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && addInput.value) {
    tasks = addTask(addInput.value, tasks);
    saveTasks(tasks);
    addInput.value = '';
    renderTasks(tasks);
  }
});

enter.addEventListener('click', () => {
  tasks = addTask(addInput.value, tasks);
  saveTasks(tasks);
  addInput.value = '';
  renderTasks(tasks);
});

// Add event listener for clearing completed tasks
clearText.addEventListener('click', () => {
  tasks = handlerClearText(tasks);
  renderTasks(tasks);
});
