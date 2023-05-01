import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import Join from '../src/pages/Join';

describe('Join form', () => {
  test('should allow user to enter input values', () => {
    const { getByLabelText } = render(<Join />);
    
    const firstNameInput = getByLabelText('Nombre');
    fireEvent.change(firstNameInput, { target: { value: 'Yasuri' } });
    expect(firstNameInput.getAttribute('value')).toBe('Yasuri');
  
    const lastNameInput = getByLabelText('Apellido');
    fireEvent.change(lastNameInput, { target: { value: 'Yamileth' } });
    expect(lastNameInput.getAttribute('value')).toBe('Yamileth');
  
    const userNameInput = getByLabelText('Alias');
    fireEvent.change(userNameInput, { target: { value: 'yileth' } });
    expect(userNameInput.getAttribute('value')).toBe('yileth');
  
    const emailInput = getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'yasuriyamileth@gmail.com' } });
    expect(emailInput.getAttribute('value')).toBe('yasuriyamileth@gmail.com');
  
    const passwordInput = getByLabelText('Contraseña');
    fireEvent.change(passwordInput, { target: { value: 'Pa55word' } });
    expect(passwordInput.getAttribute('value')).toBe('Pa55word');
  });
  
  test('renders join button', () => {
    render(<Join />);
    expect(screen.getByRole('button', { name: 'Registrarme' })).toBeInTheDocument();
  });
  
});
