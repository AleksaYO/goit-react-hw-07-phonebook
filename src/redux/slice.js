import { initialState } from './initialState';
import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { fetchAll } from './operations';

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    //   addContact: {
    //     reducer(state, { payload }) {
    //       if (state.contacts.items.some(item => item.number === payload.number)) {
    //         Notify.failure('Контакт с таким номером уже существует');
    //         return;
    //       } else {
    //         state.contacts.items.push(payload);
    //       }
    //     },
    //     prepare({ name, number }) {
    //       return {
    //         payload: {
    //           name,
    //           number,
    //           id: nanoid(),
    //         },
    //       };
    //     },
    //   },
    //   deleteContact: {
    //     reducer(state, { payload }) {
    //       state.contacts.items = state.contacts.items.filter(
    //         item => item.id !== payload
    //       );
    //     },
    //   },
    filteredContacts(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchAll.pending](state) {},
    [fetchAll.fulfilled](state, { payload }) {
      state.contacts.items.push(payload);
    },
    [fetchAll.rejected](state, action) {},
  },
});

export const { filteredContacts } = phonebookSlice.actions;

export const phoneReducer = phonebookSlice.reducer;
