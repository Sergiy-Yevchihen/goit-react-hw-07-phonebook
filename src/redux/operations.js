import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://6452299ea2860c9ed4038ee9.mockapi.io/';
axios.defaults.params = {
  headers: { 'content-type': 'application/json' },
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      toast.error(
        `Error - ${error.message}. Something went wrong. Use the service over time.`
      );
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (val, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts`, val);
      return response.data;
    } catch (error) {
      toast.error(
        `Error - ${error.message}. Something went wrong. Use the service over time.`
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      toast.error(
        `Error - ${error.message}. Something went wrong. Use the service over time.`
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
