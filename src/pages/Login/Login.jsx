import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/authOperations';
import { StyledForm } from 'pages/Register/Register.styled';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Button, TextField } from '@mui/material';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => {
        toast.success(`Welcome back, ${res.user.name}!`);
      })
      .catch(() => {
        toast.error('Something went wrong!!!');
      });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <TextField
          {...register('email')}
          label="Email"
          variant="outlined"
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

export default Login;
