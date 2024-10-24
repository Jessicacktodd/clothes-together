import { render } from '@testing-library/react';
import { App } from './App'; // Ensure you're using curly braces for named export

test('renders App without crashing', () => {
  render(<App />);
});


