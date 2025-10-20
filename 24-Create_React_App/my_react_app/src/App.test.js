import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  // If there is at least one image, the test will pass
  const imageElement = screen.getAllByRole("img");
  expect(imageElement.length).toGreaterThan(0);
});
