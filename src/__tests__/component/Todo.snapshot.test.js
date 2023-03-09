'use strict';
import { render, screen, fireEvent } from '@testing-library/react';
// import TestRenderer,{renderer } from 'react-test-renderer';
import Todo from '../../component/Todo';
import renderer from 'react-test-renderer';

const component = renderer.create(
  <Todo />
)

// beforeAll(() =>  render(<Todo />))
// beforeEach(() =>  {
//   const component = renderer.create(
//     <Todo />
//   )
// })
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

// 初期表示
test('初期表示', async () => {
  // const component = renderer.create(
  //   <Todo />
  // )
  expect(component.toJSON()).toMatchSnapshot();
});

// 登録、削除
test('登録、削除', async () => {
  // const component = renderer.create(
  //   <Todo />
  // )
  // 登録
  component.getInstance().updateValue({ target: { value: 'Todo1' } });
  component.getInstance().addTodo();
  component.getInstance().addTodo();
  expect(component.toJSON()).toMatchSnapshot();
  // 削除
  component.getInstance().removeTodo(0);
  expect(component.toJSON()).toMatchSnapshot();
});
