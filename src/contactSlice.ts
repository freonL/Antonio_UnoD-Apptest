import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as apiClient from './apiClient';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import axios, {AxiosError} from 'axios';

export interface IContact {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
}

export interface IContactState {
  contacts: IContact[];
  contact: IContact;
  loading: boolean;
  error: string;
}

const initialState: IContactState = {
  contacts: [],
  contact: <IContact>{},
  loading: false,
  error: '',
};

export const fetchContact = createAsyncThunk(
  'contact/fetchContact',
  async () => {
    const resp = await axios.get(
      'https://simple-contact-crud.herokuapp.com/contact',
    );

    return resp.data;
  },
);

// export const createContact = createAsyncThunk<IContact>(
//   'contact/createContact',
//   async (data: IContact) => {
//     const resp = await axios.post(
//       'https://simple-contact-crud.herokuapp.com/contact',
//       data,
//     );
//     console.log(resp);
//     return data;
//   },
// );

export const updateContact = createAsyncThunk<
  IContact,
  {id: string} & Partial<IContact>,
  {
    rejectValue: any;
  }
>('contact/updateContact', async (userData, {rejectWithValue}) => {
  try {
    const {id, ...fields} = userData;
    const response = await axios.put(
      `https://simple-contact-crud.herokuapp.com/contact/${id}`,
      fields,
    );
    return response.data;
  } catch (err) {
    // let error: AxiosError<any> = err; // cast the error for access
    // if (!error.response) {
    //   throw err;
    // }
    // We got validation errors, let's return those so we can reference in our component and set form errors
    // return rejectWithValue(error.response.data);
  }
});

export const fetchContactByID = createAsyncThunk<
  IContact,
  {id: string},
  {
    rejectValue: any;
  }
>('contact/fetchContactByID', async (userData, {rejectWithValue}) => {
  try {
    const {id} = userData;
    const response = await axios.get(
      `https://simple-contact-crud.herokuapp.com/contact/${id}`,
    );
    return response.data;
  } catch (err) {
    // let error: AxiosError<any> = err; // cast the error for access
    // if (!error.response) {
    //   throw err;
    // }
    // We got validation errors, let's return those so we can reference in our component and set form errors
    // return rejectWithValue(error.response.data);
  }
});

const contactSlice = createSlice({
  name: 'contact',
  initialState: initialState,
  reducers: {
    // addContact: (state, action) => {
    //   state.contacts = [...state.contacts, action.payload];
    // },
    // updateContact: (state, action) => {
    //   const idx = state.contacts.findIndex(
    //     item => item.id === action.payload.id,
    //   );
    //   if (idx === -1) {
    //     return;
    //   }
    //   state.contacts[idx] = action.payload;
    // },
    // removeContact: (state, action) => {
    //   state.contacts = state.contacts.filter(
    //     item => item.id !== action.payload.id,
    //   );
    // },
  },

  extraReducers: builder => {
    builder.addCase(fetchContact.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchContact.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.contacts = action.payload.data;
    });
    builder.addCase(fetchContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error?.message || '';
      state.contact = <IContact>{};
    });

    builder.addCase(fetchContactByID.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchContactByID.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.contact = action.payload;
    });
    builder.addCase(fetchContactByID.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error?.message || '';
      state.contact = <IContact>{};
    });

    builder.addCase(updateContact.pending, state => {
      state.loading = true;
    });
    builder.addCase(updateContact.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.contacts = [...state.contacts, action.payload];
    });
    builder.addCase(updateContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error?.message || '';
      state.contacts = [];
    });

    // builder.addCase(createContact.pending, state => {
    //   state.loading = true;
    // });
    // builder.addCase(createContact.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.error = '';
    //   state.contacts = [...state.contacts, action.payload];
    // });
    // builder.addCase(createContact.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error?.message || '';
    //   state.contacts = [];
    // });
  },
});

// export const {addContact, updateContact, removeContact} = contactSlice.actions;

export default contactSlice.reducer;
