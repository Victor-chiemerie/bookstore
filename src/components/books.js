import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, deleteBooks } from '../redux/API/getAPI';
import Form from './Form';
import styles from '../styles/book.module.scss';

const Books = () => {
  const { booklist, status } = useSelector((store) => store.book);
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
    <ul className={styles.book}>
      {
      booklist.map((book) => (
        <li key={book.id}>
          <li>
            <div className="title">
              <h3>Title: </h3>
              <p>
                {book.title}
              </p>
            </div>
            <div className="author">
              <h3>Author: </h3>
              <p>
                {book.author}
              </p>
            </div>
            <div className="category">
              <h3>Category: </h3>
              <p>
                {book.category}
              </p>
            </div>
          </li>

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
      {displayBook}
      <Form />
    </>
  );
};

export default Books;
