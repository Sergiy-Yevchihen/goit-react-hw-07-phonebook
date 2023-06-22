import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { fetchContacts, deleteContact, addContact } from './operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const extraActions = [fetchContacts, deleteContact, addContact];
const getActions = type => extraActions.map(action => action[type]);
const fetchContactsSuccessReducer = ({ contacts }, { payload }) => {
  contacts.items = payload;
};
const addContactSuccessReducer = ({ contacts }, { payload }) => {
  const duplicate = contacts.items.some(
    contact => contact.name.toLowerCase() === payload.name.toLowerCase().trim()
  );
  if (duplicate) {
    toast.warn(`${payload.name} is already in contacts.`, {
      theme: 'colored',
    });
  } else {
    contacts.items.push(payload);
  }
};
const deleteContactSuccessReducer = ({ contacts }, { payload }) => {
  contacts.items = contacts.items.filter(contact => contact.id !== payload.id);
};
const pendingReducer = ({ contacts }) => {
  contacts.isLoading = true;
};
const rejectedReducer = ({ contacts }, { payload }) => {
  contacts.isLoading = false;
  contacts.error = payload;
};
const fulfilledReducer = ({ contacts }) => {
  contacts.isLoading = false;
  contacts.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactSuccessReducer)

      .addMatcher(isAnyOf(...getActions('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), rejectedReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;

export const { filter } = contactsSlice.actions;
