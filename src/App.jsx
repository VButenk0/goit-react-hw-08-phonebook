import { Route, Routes } from 'react-router-dom';
import Phonebook from 'pages/Phonebook/Phonebook';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import AppBar from 'components/AppBar/AppBar';
import HomePage from 'pages/HomePage/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { currentUserThunk } from './redux/auth/authOperations';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import { selectIsRefresh } from './redux/auth/authSelectors';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  const isRefresh = useSelector(selectIsRefresh);

  return isRefresh ? (
    <p>Loading...</p>
  ) : (
    <>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          restricted
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          restricted
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Phonebook />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<h2>Not found</h2>}></Route>
      </Routes>
    </>
  );
};
