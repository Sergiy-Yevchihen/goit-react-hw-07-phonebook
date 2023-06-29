import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  FormInput,
  ButtonForm,
  LabelForm,
  InputForm,
} from './ContactForm.styled';

const initialState = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setState({ ...state, name: value });
    } else if (name === 'number') {
      setState({ ...state, number: value });
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const duplicate = contacts.some(
      contact => contact.name.toLowerCase() === state.name.toLowerCase().trim()
    );
    if (duplicate) {
      toast.warn(`${state.name} is already in contacts.`, {
        theme: 'colored',
      });
    } else {
      dispatch(addContact(state));
    }

    reset();
  
  };

  const reset = () => {
    setState(initialState);
  };

  return (
    <FormInput onSubmit={handleSubmitForm}>
      <LabelForm>
        Name
        <InputForm
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // 
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={state.name}
        />
      </LabelForm>
      <LabelForm>
        Number
        <InputForm
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // 
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={state.number}
        />
      </LabelForm>
      <ButtonForm type="submit" disabled={!(state.name && state.number)}>
        Add contact
      </ButtonForm>
    </FormInput>
  );
};

export default ContactForm;
