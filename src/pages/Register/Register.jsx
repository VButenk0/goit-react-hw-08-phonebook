import React from 'react';
import { useDispatch } from 'react-redux';
import { signupThunk } from '../../redux/auth/authOperations';
import { StyledForm } from './Register.styled';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Button, TextField } from '@mui/material';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(signupThunk(data))
      .unwrap()
      .then(res => {
        toast.success(`Welcome to PhoneBook, ${res.user.name}!`);
      })
      .catch(() => {
        toast.error('Something went wrong!!!');
      });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <TextField
          {...register('name')}
          label="Name"
          variant="outlined"
          color="secondary"
        />
        <TextField
          {...register('email')}
          label="Email"
          variant="outlined"
          type="email"
          color="secondary"
        />
        <TextField
          {...register('password')}
          label="Password"
          variant="outlined"
          type="password"
          color="secondary"
        />
        <Button type="submit" variant="contained" color="secondary">
          Login
        </Button>
      </StyledForm>
    </>
  );
};

export default Register;
