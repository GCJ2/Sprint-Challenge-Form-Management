import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import UserForm from './UserForm';
import "@testing-library/react/cleanup-after-each"


describe('<Form />', () => {
  it('renders without creashing', () => {
    render(<UserForm />);
  });
  it('has a submit button', () => {
    const userForm = render(<UserForm />);
    userForm.getByText(/Submit/i);
  });
});
