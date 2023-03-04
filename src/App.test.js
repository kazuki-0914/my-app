import { render, screen } from '@testing-library/react';
import App from './App';
// import Todo from './component/Todo'

jest.mock('./component/Todo', () => 'div');
test('renders learn react link', async () => {

  render(<App />);
  console.log(`screen`,screen.debug());
  // console.log(`findAllByText`,await screen.getByText());
  // expect(screen.getByText()).toBeUndefined();
  expect(screen.queryByTestId('Todo')).toBeNull()
  // const component = renderer.create(<App />);
  // expect(component.toJSON()).toMatchSnapshot();
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
