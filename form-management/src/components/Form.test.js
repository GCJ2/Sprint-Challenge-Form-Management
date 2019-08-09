import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import UserForm from './UserForm';
import "@testing-library/react/cleanup-after-each"


describe('<Form />', () => {
  it('renders without creashing', () => {
    render(<UserForm />);
  });
  it('has working button', () => {
    const form = render(<UserForm />);
    const submitBtn = getByText(/^Submit$/i)
    fireEvent.click(submitBtn)
  })
});
