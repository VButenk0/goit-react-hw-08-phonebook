import React from 'react';
import { useDispatch } from 'react-redux';
import { signupThunk } from '../../redux/auth/authOperations';
import { StyledForm } from './Register.styled';
import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(signupThunk(data));
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <label htmlFor="name">
          Name
          <input {...register('name')} name="name" type="text" />
        </label>
        <label htmlFor="email">
          Email
          <input {...register('email')} name="email" type="email" />
        </label>
        <label htmlFor="password">
          Password
          <input {...register('password')} name="password" type="password" />
        </label>
        <button>Sign Up</button>
      </StyledForm>
    </>
  );
};

export default Register;
