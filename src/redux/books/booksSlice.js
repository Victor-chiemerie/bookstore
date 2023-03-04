import { createSlice } from '@reduxjs/toolkit';
import { postBooks, fetchBooks, deleteBooks } from '../API/getAPI';

const initialState = {
  booklist: [],
  totalbooks: 0,
  status: 'idle',
  error: null,
  createdStatus: '',
  deletedStatus: '',
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state) => ({
      ...state,
      status: 'loading',
    }))
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const keys = Object.keys(action.payload);
        const temparray = [];
        keys.forEach((key) => {
          temparray.push(Object.assign({ id: key }, ...action.payload[key]));
        });
        return {
          ...state,
          booklist: [...temparray],
          status: 'loaded',
          totalbooks: state.booklist.length + 0,
        };
      }).addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      })).addCase(postBooks.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        createdStatus: action.payload,
      }))
      .addCase(deleteBooks.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        createdStatus: action.payload,
        totalbooks: state.booklist.length + 0,
      }));
  },
});

export default bookSlice.reducer;
