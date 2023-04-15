import { addCheckboxEventListener, handlerClearText } from './status.js';

jest.mock('./save.js', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('addCheckboxEventListener', () => {
  test('should update the completed status of a task when a checkbox is checked', () => {
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
    ];

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = true;

    const input = document.createElement('input');
    input.classList.add('activated');

    addCheckboxEventListener(checkbox, tasks[0], input, tasks);

    checkbox.dispatchEvent(new Event('change'));

    expect(tasks[0].completed).toBe(true);
    expect(input.classList.contains('activated')).toBe(false);
  });
});

describe('handlerClearText', () => {
  test('should remove all completed tasks and update the indexes of the remaining tasks', () => {
    const tasks = [
      {
        description: 'Task 1',
        completed: true,
        index: 1,
      },
      {
        description: 'Task 2',
        completed: false,
        index: 2,
      },
      {
        description: 'Task 3',
        completed: true,
        index: 3,
      },
    ];

    const expected = [
      {
        description: 'Task 2',
        completed: false,
        index: 1,
      },
    ];

    const result = handlerClearText(tasks);

    expect(result).toEqual(expected);
  });
});
