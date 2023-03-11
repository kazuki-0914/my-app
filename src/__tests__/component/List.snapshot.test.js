'use strict';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import List from '../../component/List';
import renderer from 'react-test-renderer';
import {rest} from 'msw'
import {setupServer} from 'msw/node'
// TODO 工事中
// import { render, unmountComponentAtNode } from "react-dom";
// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });
// beforeAll(() =>  render(<Todo />))
// beforeEach(() =>  render(<List />))
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())
    const items = [{
      id: 1,
      userId: 1,
      title: 'delectus aut autem',
      completed: 'false'
  },
  {
      id: 12,
      userId: 12,
      title: 'delectus aut autem2',
      completed: 'false'
  }]
const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
    return res(ctx.json(items))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
// 初期表示
// test('初期表示', async () => {
//   render(<List />);
//   expect(screen.getByText('id')).toBeVisible()
// });
// 初期表示
test.skip('表示', async () => {
  render(<List />);
  console.log(`screen`,screen.debug());
  // act(() => {
  //   /* 状態を更新するイベントを発生させます */
  //   const items = [{
  //     id: 1,
  //     userId: 1,
  //     title: 'delectus aut autem',
  //     completed: 'false'
  // },
  // {
  //     id: 12,
  //     userId: 12,
  //     title: 'delectus aut autem2',
  //     completed: 'false'
  // }]
  //   jest.spyOn(global, "fetch").mockImplementation(() =>
  //     Promise.resolve({
  //       json: () => Promise.resolve(items)
  //     })
  //   );
  // });

  // const component = renderer.create(
  //   <List />,container
  // )
  // expect(component.toJSON()).toMatchSnapshot();

    // Use the asynchronous version of act to apply resolved promises
    // await act(async () => {
      // render(<List/>,container);
    // });
    // console.log(`screen`,container.textContent);
    // console.log(`container`,container.render());
  // expect(screen.getByText('delectus aut autem')).toBeVisible()
  // expect(container.getByText('delectus aut autem')).toBeVisible();
  // remove the mock to ensure tests are completely isolated
  // global.fetch.mockRestore();
});