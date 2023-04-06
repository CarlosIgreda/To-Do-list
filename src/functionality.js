// Define a function to save the tasks in local storage
export const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Define the functions for adding, deleting and editing tasks
export const addTask = (description, tasks) => {
  const task = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(task);
  saveTasks(tasks);
  return task;
};

export const deleteTask = (index, tasks) => {
  tasks.splice(index, 1);
  tasks.forEach((task, i) => {
    task.index = i;
  });
  saveTasks(tasks);
};

export const editTask = (index, description, tasks) => {
  tasks[index].description = description;
  saveTasks(tasks);
};