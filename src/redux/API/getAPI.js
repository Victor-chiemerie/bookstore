import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/z9xY0wHY2FpZX8MwxMcy/books/';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});
export const postBooks = createAsyncThunk('books/postBooks', async (initialbooks) => {
  try {
    const response = await axios.post(BASE_URL, initialbooks);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteBooks = createAsyncThunk('books/deleteBooks', async (bookid) => {
  try {
    const response = await axios.delete(BASE_URL + bookid);
    return response.data;
  } catch (error) {
    return error.message;
  }
});
