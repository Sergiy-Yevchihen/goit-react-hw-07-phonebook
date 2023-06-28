// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';



import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';

import { ToastContainer } from 'react-toastify';
import { Container, TitleForm, TitleContacts, Info } from './App.styled';

const App = () => {
  // const contacts = useSelector(selectContacts);
   const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {!error && (
        <>
          <TitleForm>Phonebook</TitleForm>
          <ContactForm />
        </>
      )}
      {!items.length && !error && <Info>No contacts.</Info>}
      {items.length > 0 && (
        <>
          <TitleContacts>Contacts</TitleContacts>
          <Filter />
        </>
      )}
      {isLoading && !error && <Loader />}
      <ContactsList />
      <ToastContainer />
    </Container>
  );
};

export default App;
