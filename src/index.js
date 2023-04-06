import './styles.css';
import {
  saveTasks, addTask, deleteTask, editTask,
} from './functionality.js';

// Get the task list from local storage or initialize it to an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Select the necessary HTML elements
const ul = document.querySelector('.ul-items');
const addInput = document.querySelector('.add-item');
const enter = document.querySelector('.enter');

// Define a function to render the tasks in the UI
const renderTasks = () => {
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
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      input.classList.toggle('activated');
      saveTasks(tasks);
    });

    input.addEventListener('click', () => {
      divItem.style.backgroundColor = 'lightgoldenrodyellow';
      input.style.backgroundColor = 'lightgoldenrodyellow';
      button.style.display = 'none';
      trash.style.display = 'block';
    });

    trash.addEventListener('click', () => {
      deleteTask(index, tasks);
      renderTasks();
    });

    input.addEventListener('blur', () => {
      setTimeout(() => {
        editTask(index, input.value, tasks);
        divItem.style.backgroundColor = '#fff';
        input.style.backgroundColor = '#fff';
        button.style.display = 'block';
        trash.style.display = 'none';
      }, 125);
    });

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && input.value) {
        editTask(index, input.value, tasks);
        divItem.style.backgroundColor = '#fff';
        input.style.backgroundColor = '#fff';
        button.style.display = 'block';
        trash.style.display = 'none';
      }
    });
  });
};

// Render the initial tasks
renderTasks();

// Add event listener for adding a new task
addInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && addInput.value) {
    addTask(addInput.value, tasks);
    addInput.value = '';
    renderTasks();
  }
});

enter.addEventListener('click', () => {
  addTask(addInput.value, tasks);
  addInput.value = '';
  renderTasks();
});

// Add event listener for clearing completed tasks
const clearText = document.querySelector('.clear-text');
clearText.addEventListener('click', () => {
  tasks = tasks.filter((task) => !task.completed);
  tasks.forEach((task, i) => {
    task.index = i;
  });
  saveTasks(tasks);
  renderTasks();
});
