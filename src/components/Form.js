import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState({});
  const [author, setAuthor] = useState({});
  const dispatch = useDispatch();

  const addBookHandler = (event) => {
    event.preventDefault();
    const book = { id: uuidv4(), ...title, ...author };
    dispatch(addBook(book));
    event.target.reset();
  };
  return (
    <div className="formBox">
      <form onSubmit={addBookHandler}>
        <input className="titleInput" type="text" placeholder="Title" onChange={(e) => setTitle({ title: e.target.value })} />
        <select className="authorSelect" onChange={(e) => setAuthor({ author: e.target.value })}>
          <option className="author" value="author-list">Select Author</option>
          <option className="author" value="J.R Tolkein">J.R Tolkein</option>
          <option className="author" value="Adeyemi">Adeyemi</option>
          <option className="author" value="Chimamanda Adichie">Chimamanda Adichie</option>
        </select>
        <button type="submit" className="formButton">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
