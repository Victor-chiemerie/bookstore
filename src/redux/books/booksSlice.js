import { createSlice } from '@reduxjs/toolkit';
import bookStore from './bookShop';

const initialState = {
  booklist: bookStore,
  amount: bookStore.length,
  total: 0,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      booklist: [...state.booklist, action.payload],
    }),
    removeBook: (state, action) => {
      state.booklist.splice(state.booklist.findIndex(
        (book) => book.id === action.payload,
      ), 1);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
