import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {APIRoute, FetchStatus, SendStatus} from '../../const/const';
import {errorHandle} from '../../services/error-handle';
import {Contacts, Contact, NewContact} from '../../types/contacts';
import {AppDispatch, State} from '../../types/state';

interface InitialState {
  contactsData: Contacts,
  contactsFetchStatus: FetchStatus,
  newContactSendStatus: SendStatus,
}
  
const initialState: InitialState = {
  contactsData: [],
  contactsFetchStatus: FetchStatus.Idle,
  newContactSendStatus: SendStatus.Idle,
};

export const fetchContacts = createAsyncThunk<Contact[], undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/fetchContacts',
    async (_arg, {extra: api}) => {
      try {
        const {data} = await api.get<Contacts>(`${APIRoute.Contacts}`);
        return data;
      } catch (error) {
        errorHandle(error);
        throw error;
      }
    },
  );
  
export const postNewContact = createAsyncThunk<Contacts, NewContact, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
  }>(
  'data/sendNewContact',
  async (contact, {extra: api}) => {
    try {
      const {data} = await api.post<Contacts>(`${APIRoute.Contacts}`, {contact});
      return data;
    } catch (error) {
        errorHandle(error);
        throw error;
    }
  },
);
  
const contactsProcess = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder
        .addCase(fetchContacts.pending, (state) => {
          state.contactsFetchStatus = FetchStatus.Loading;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.contactsFetchStatus = FetchStatus.Succeeded;
          state.contactsData = action.payload;
        })
        .addCase(fetchContacts.rejected, (state) => {
          state.contactsFetchStatus = FetchStatus.Failed;
        })
        .addCase(postNewContact.pending, (state) => {
          state.newContactSendStatus = SendStatus.Loading;
        })
        .addCase(postNewContact.fulfilled, (state, action) => {
          state.newContactSendStatus = SendStatus.Succeeded;
          state.contactsData = action.payload;
        })
        .addCase(postNewContact.rejected, (state) => {
          state.newContactSendStatus = SendStatus.Failed;
        });
    },
  });
  
  const {reducer} = contactsProcess;
  
  export default reducer;