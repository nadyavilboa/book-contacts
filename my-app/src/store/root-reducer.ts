import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const/const';
import contactsReducer from './contacts-process/contacts-process';
import userProcess from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Contacts]: contactsReducer,
  [NameSpace.User]: userProcess,
});
