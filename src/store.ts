import {combineReducers, configureStore} from '@reduxjs/toolkit';
import contactSlice from './contactSlice';

const rootReducers = combineReducers({
  contactList: contactSlice,
});

export type RootState = ReturnType<typeof rootReducers>;

const store = configureStore({
  reducer: rootReducers,
});

export default store;
