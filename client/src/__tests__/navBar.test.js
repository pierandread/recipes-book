import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../components/NavBar/NavBar';

test('renders navTitle in NavBar component', () => {
  const { getByText } = render(<NavBar />);
  const navTitle = getByText(/Recepies Book/i);
  expect(navTitle).toBeInTheDocument();
});
