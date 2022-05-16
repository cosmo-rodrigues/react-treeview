import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Starting tests', () => {
  it('Should be possible to run jest tests', () => {
    expect(1 + 1).toBe(2);
  });
  it('Should run tests without problems', () => {
    expect('Testes are running...').toBe('Testes are running...');
  });
});

describe('App component', () => {
  it('Should be rendered', () => {
    render(<App />);
  });
});
