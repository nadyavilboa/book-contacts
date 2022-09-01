import {State} from '../../types/state';
import {NameSpace} from '../../const/const';

const contactsState = (state: State) => state[NameSpace.Contacts];

export const selectContacts = (state: State) => contactsState(state).contactsData;
export const selectContactsStatus = (state: State) => contactsState(state).contactsFetchStatus;

export const newContactSendStatus = (state: State) => contactsState(state).newContactSendStatus;