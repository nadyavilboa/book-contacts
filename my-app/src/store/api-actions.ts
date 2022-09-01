import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from './index';
import { store } from './index';
import { Contact, Contacts } from '../types/contacts';
import { loadContacts } from './action';
import { errorHandle } from '../services/error-handle';
import { APIRoute } from '../const/const';

export const fetchContactsAction = createAsyncThunk(
    'data/loadContacts',
    async () => {
        try {
        const {data} = await api.get<Contacts>(APIRoute.Contacts);
        store.dispatch(loadContacts(data));
        } catch (error) {
        errorHandle(error);
        }
    },
);

export const fetchNewContactAction = createAsyncThunk(
    'data/sendNewContact',
    async (contact: Contact) => {
      try {
        await api.post<Contact>(`${APIRoute.Contacts}`, {contact});
        store.dispatch(fetchContactsAction());
      } catch (error) {
        errorHandle(error);
      }
    },
  );