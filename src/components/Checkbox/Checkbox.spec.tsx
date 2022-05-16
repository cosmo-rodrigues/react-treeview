import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CheckboxComponente } from '.';

describe('Checkbox componente', () => {
  it('Should be render on the screen', () => {
    jest.spyOn(localStorage, 'getItem');
    render(
      <CheckboxComponente
        id='asfga'
        name='José Ferreira'
        isIndeterminate='false'
      />
    );
    const labelTitle = screen.getByText('José Ferreira');
    expect(labelTitle).toBeInTheDocument();
  });
  it('Should be contain an label HTML element', async () => {
    jest.spyOn(localStorage, 'getItem');
    render(
      <CheckboxComponente
        id='afwerfa'
        name='Maria da Silva'
        isIndeterminate='false'
      />
    );

    const labelElement = screen.getByLabelText('Maria da Silva');
    expect(labelElement).toBeInTheDocument();
  });
});
