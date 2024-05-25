import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShortenedUrl from './ShortenedUrl';

describe('ShortenedUrl Component', () => {
  test('renders the shortened URL', () => {
    render(<ShortenedUrl url="https://bit.ly/shortened" />);
    expect(screen.getByText('Shortened URL:')).toBeInTheDocument();
    expect(screen.getByText('https://bit.ly/shortened')).toBeInTheDocument();
  });

  test('includes a clickable link', () => {
    render(<ShortenedUrl url="https://bit.ly/shortened" />);
    expect(screen.getByText('https://bit.ly/shortened')).toHaveAttribute('href', 'https://bit.ly/shortened');
  });
});
