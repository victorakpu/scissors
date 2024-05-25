
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UrlForm from './UrlForm';

describe('UrlForm Component', () => {
  const mockOnSubmit = jest.fn();

  test('renders URL input and submit button', () => {
    render(<UrlForm onSubmit={mockOnSubmit} />);
    expect(screen.getByPlaceholderText('e.g. https://google.com')).toBeInTheDocument();
    expect(screen.getByText('Shorten')).toBeInTheDocument();
  });

  test('calls onSubmit with URL and customAlias', () => {
    render(<UrlForm onSubmit={mockOnSubmit} />);
    fireEvent.change(screen.getByPlaceholderText('e.g. https://google.com'), {
      target: { value: 'https://example.com' },
    });
    fireEvent.change(screen.getByLabelText(/custom alias/i), {
      target: { value: 'myalias' },
    });
    fireEvent.click(screen.getByText('Shorten'));

    expect(mockOnSubmit).toHaveBeenCalledWith('https://example.com', 'myalias');
  });
});
