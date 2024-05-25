import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LinkShortner from './LinkShortner';

// Mock the fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ link: 'https://bit.ly/shortened' }),
  })
) as jest.Mock;

describe('LinkShortener Component', () => {
  test('renders the URL Shortener form', () => {
    render(<LinkShortner />);
    expect(screen.getByText('URL Shortener')).toBeInTheDocument();
  });

  test('shortens a URL successfully', async () => {
    render(<LinkShortner />);
    fireEvent.change(screen.getByPlaceholderText('Enter Long URL'), {
      target: { value: 'https://example.com' },
    });
    fireEvent.click(screen.getByText('Shorten'));

    await waitFor(() => {
      expect(screen.getByText('https://bit.ly/shortened')).toBeInTheDocument();
    });
  });

  test('resets the URL input and shortened URL', async () => {
    render(<LinkShortner />);
    fireEvent.change(screen.getByPlaceholderText('Enter Long URL'), {
      target: { value: 'https://example.com' },
    });
    fireEvent.click(screen.getByText('Shorten'));

    await waitFor(() => {
      expect(screen.getByText('https://bit.ly/shortened')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Reset'));
    expect(screen.queryByText('https://bit.ly/shortened')).not.toBeInTheDocument();
  });
});
