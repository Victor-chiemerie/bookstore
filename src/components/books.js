import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, deleteBooks } from '../redux/API/getAPI';
import Form from './Form';

const Books = () => {
  const { booklist, status, totalbooks } = useSelector((store) => store.book);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
    if (status === 'succeeded') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  const displayBook = booklist.length ? (
    <ul>
      {
      booklist.map((book) => (
        <li key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.category}</p>
          <button
            type="button"
            className="bookButton"
            onClick={() => dispatch(deleteBooks(book.id))}
          >
            Remove
          </button>
        </li>
      ))
    }
    </ul>
  ) : (<p>there is no book on the shelf</p>);

  return (
    <>
      <div>{totalbooks}</div>
      {displayBook}
      <Form />
    </>
  );
};

export default Books;
