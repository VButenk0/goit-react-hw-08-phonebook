import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/authOperations';
import { StyledForm } from 'pages/Register/Register.styled';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

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
        <label htmlFor="email">
          Email
          <input {...register('email')} name="email" type="email" />
        </label>
        <label htmlFor="password">
          Password
          <input {...register('password')} name="password" type="password" />
        </label>
        <button>Log In</button>
      </StyledForm>
    </>
  );
};

export default Login;
