import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const phonebookSlice = createSlice({
  // Имя слайса
  name: 'phonebook',
  // Начальное состояние редюсера слайса
  initialState: initialState,
  // Объект редюсеров.
  reducers: {
    addContactsAction(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },

    deleteContactsAction(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    setFilterAction(state, action) {
      state.filter = action.payload;
    },
  },
});

// Генераторы экшенов
export const {
  addContactsAction,
  deleteContactsAction,
  setFilterAction,
  setInputContacts,
} = phonebookSlice.actions;
// Редюсер слайса
export const phoneReducer = phonebookSlice.reducer;
