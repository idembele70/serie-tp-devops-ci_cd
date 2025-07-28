import { expect, test } from '@playwright/test'
import Todos from '../Todos'

test('Todos feature', async () => {
  const todos = new Todos([]);
  const todo = 'My first todo';

  test.step('It should add a todo', () => {
    todos.add(todo);
    expect(todos.length).toEqual(1);
  });

  test.step('It should get a todo', () => {
    expect(todos.findOne(todo)).toEqual(todo)
  })

  test.step('It should remove a todo', () => {
    todos.delete(todo);
    expect(todos.length).toEqual(0);
  });

});