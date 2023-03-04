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
          <section className="section1">
            <div className={styles.items}>
              <p className={styles.firstp}>
                {book.category}
              </p>
              <h2>
                {book.title}
              </h2>
              <p className={styles.lastp}>
                {book.author}
              </p>
            </div>
            <div className={styles.buttons}>
              <button type="button">Comment</button>
              <button
                type="button"
                className={styles.middlebutton}
                onClick={() => dispatch(deleteBooks(book.id))}
              >
                Remove
              </button>
              <button type="button">Edit</button>
            </div>
          </section>
          <section>hello world!</section>
          <section>hello world!</section>
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
