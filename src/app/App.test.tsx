import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { TestElement } from '../enums/TestElement';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId(TestElement.GAME_BOX);
  expect(linkElement).toBeInTheDocument();
});
