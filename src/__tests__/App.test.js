import { render, screen } from '@testing-library/react';
import App from '../App';

jest.mock('../component/Todo', () => 'div');

test('renders learn react link', async () => {
  render(<App />);
  expect(screen.queryByTestId('Todo')).toBeNull()
});
