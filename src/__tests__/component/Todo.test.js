import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../../component/Todo';

// beforeAll(() =>  render(<Todo />))
beforeEach(() =>  render(<Todo />))
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

// 初期表示
test('初期表示', async () => {
  // render(<Todo />);
  expect(screen.getByText('登録')).toBeVisible()
});
// 登録、削除
test('登録、削除', async () => {
  // render(<Todo />);
  

  // 入力
  const inputValue = screen.getByTestId('todo')
  fireEvent.change(inputValue, { target: { value: 'Todo1' } })
  expect(inputValue.value).toBe("Todo1");

  // 登録
  fireEvent.click(screen.getByTestId('submit'))
  fireEvent.click(screen.getByTestId('submit'))
  expect(screen.getByText("タスク1：Todo1")).toBeVisible()
  expect(screen.getByText("タスク2：")).toBeVisible()

  // 削除
  const items = await screen.findAllByTestId('delete')
  expect(items).toHaveLength(2)
  fireEvent.click((await screen.findAllByTestId('delete')).at(1))
  // console.log(`screen`, screen.debug());
  expect(screen.getByText("タスク1：Todo1")).toBeVisible()
});
