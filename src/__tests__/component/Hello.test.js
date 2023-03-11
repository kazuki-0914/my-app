import React from "react";
import Hello from "../../component/Hello";
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

it("renders with or without a name", () => {
  render(<Hello />)
  expect(screen.getByText('Hey, stranger')).toBeVisible()

  render(<Hello name="Jenny" />)
  expect(screen.getByText('Hello, Jenny!')).toBeVisible()

  render(<Hello name="Margaret" />)
  expect(screen.getByText('Hello, Margaret!')).toBeVisible()
});