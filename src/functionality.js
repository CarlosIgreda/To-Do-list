// Define the functions for adding, deleting and editing tasks
export const addTask = (description, tasks) => {
  const task = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(task);
  return tasks;
};

export const deleteTaskByIndex = (index, tasks) => {
  tasks.splice(index, 1);
  tasks.forEach((task, i) => {
    task.index = i + 1;
  });
  return tasks;
};

export const editTask = (index, description, tasks) => {
  tasks[index].description = description;
  return tasks;
};