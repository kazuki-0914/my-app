import React from "react";
import { act } from "react-dom/test-utils";
import User from "../../component/User";
import { render, screen, fireEvent } from '@testing-library/react';
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

it("renders user data", async () => {
  const fakeUser = {
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue"
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<User id="123" />)
  });
  // console.log(`screen`,screen.debug());
  expect(screen.getByText('Joni Baez')).toBeVisible()

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});

// TODO error
it.skip("error", async () => {
  const fakeUser = {
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue"
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    // Promise.resolve({
    //   json: () => Promise.resolve(fakeUser)
    // })
    Promise.reject(
      new Error('fail')
    )
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<User id="123" />)
  });
  // console.log(`screen`,screen.debug());
  expect(screen.getByText('loading...')).toBeVisible();

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});