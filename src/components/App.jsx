import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { StyledContainer } from './Container.styled';
import { useSelector } from 'react-redux';

export const App = () => {
  const loading = useSelector(state => state.contacts.loading);
  const error = useSelector(state => state.contacts.loading);

  return (
    <StyledContainer>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
    </StyledContainer>
  );
};
