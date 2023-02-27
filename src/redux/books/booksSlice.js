import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state) => {
            
        }
    }
})
