import {createAction} from '@reduxjs/toolkit';
import { Contacts, Contact } from '../types/contacts';

export const loadContacts = createAction('data/loadContacts', (contacts: Contacts) => ({
  payload: contacts,
}));

export const sendNewContact = createAction('data/sendNewContact', (contact: Contact) => ({
  payload: contact,
}));