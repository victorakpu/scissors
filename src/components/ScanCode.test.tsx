import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ScanCode from './ScanCode';

// Mock the QRCode generation
jest.mock('qrcode', () => ({
  toDataURL: jest.fn((url, options, callback) => callback(null, 'data:image/png;base64,testdata')),
}));

describe('ScanCode Component', () => {
  test('renders the QR Code Generator form', () => {
    render(<ScanCode />);
    expect(screen.getByText('QR Code Generator')).toBeInTheDocument();
  });

  test('generates a QR code', async () => {
    render(<ScanCode />);
    fireEvent.change(screen.getByPlaceholderText('e.g. https://google.com'), {
      target: { value: 'https://example.com' },
    });
    fireEvent.click(screen.getByText('Generate'));

    await waitFor(() => {
      expect(screen.getByAltText('Generated QR Code')).toBeInTheDocument();
    });
  });

  test('includes a download link for the QR code', async () => {
    render(<ScanCode />);
    fireEvent.change(screen.getByPlaceholderText('e.g. https://google.com'), {
      target: { value: 'https://example.com' },
    });
    fireEvent.click(screen.getByText('Generate'));

    await waitFor(() => {
      expect(screen.getByText('Download Code')).toBeInTheDocument();
      expect(screen.getByText('Download Code')).toHaveAttribute('href', 'data:image/png;base64,testdata');
    });
  });
});
