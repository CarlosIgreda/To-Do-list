import { addTask, deleteTaskByIndex, editTask } from './functionality.js';

describe('Add item', () => {
  test('should add a new task to the tasks array', () => {
    const tasks = [{ description: 'Task 1', completed: false, index: 1 }];
    const newTask = { description: 'Task 2', completed: false, index: 2 };
    const expected = [...tasks, newTask];
    const result = addTask(newTask.description, tasks);
    expect(result).toEqual(expected);
  });
});

describe('Delete item', () => {
  test('should remove a selected task from the tasks array', () => {
    const tasks = [
      {
        description: 'Task 1',
        completed: false,
        index: 1,
      },
      {
        description: 'Task 2',
        completed: false,
        index: 2,
      },
      {
        description: 'Task 3',
        completed: false,
        index: 3,
      },
    ];
    const expected = tasks.filter((task) => task.index !== 2)
      .map((task, i) => {
        task.index = i + 1;
        return task;
      });
    const result = deleteTaskByIndex(1, tasks);
    expect(result).toEqual(expected);
  });
});

describe('Edit item', () => {
  test('should edit a selected task from a tasks array', () => {
    const tasks = [
      {
        description: 'Task 1',
        completed: false,
        index: 1,
      },
      {
        description: 'Task 2',
        completed: false,
        index: 2,
      }];
    tasks[1].description = 'Task 2 updated';
    const result = editTask(1, 'Task 2 updated', tasks);
    expect(result).toEqual(tasks);
  });
});
