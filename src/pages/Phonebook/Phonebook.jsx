import React from 'react';
import { StyledContainer } from './Phonebook.styled';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const Phonebook = () => {
  const loading = useSelector(state => state.contacts.loading);
  const error = useSelector(state => state.contacts.error);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    <StyledContainer>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      {loading && <Loader />}
      {error && (
        <h3>
          {error &&
            toast.error(
              'Something went wrong. Please check your authorization.'
            )}
        </h3>
      )}
    </StyledContainer>
  ) : (
    <h3>Please register or login to your account to see contacts</h3>
  );
};

export default Phonebook;
