import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Form from './Form';

const Books = () => {
  const { booklist } = useSelector((store) => store.book);
  const dispatch = useDispatch();
  const displayBook = booklist.length ? (
    <ul>
      {
      booklist.map((book) => (
        <li key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.category}</p>
          <button type="button" className="bookButton" onClick={() => dispatch(removeBook(book.id))}>Remove</button>
        </li>
      ))
    }
    </ul>
  ) : (<p>there is no book on the shelf</p>);

  return (
    <>
      {displayBook}
      <Form />
    </>
  );
};

export default Books;
