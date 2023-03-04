import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import { postBooks } from '../redux/API/getAPI';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Fiction');
  const dispatch = useDispatch();

  const addBookHandler = (event) => {
    if (title !== '' && author !== '') {
      event.preventDefault();
      const book = {
        item_id: `item${uuidv4()}`,
        title,
        author,
        category,
      };
      dispatch(postBooks(book));
      event.target.reset();
    }
  };
  return (
    <div className="formBox">
      <form onSubmit={addBookHandler}>
        <input required className="titleInput" type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <select required className="authorSelect" onChange={(e) => setAuthor(e.target.value)}>
          <option className="author" value="author-list">Select Author</option>
          <option className="author" value="J.R Tolkein">J.R Tolkein</option>
          <option className="author" value="Adeyemi">Adeyemi</option>
          <option className="author" value="Chimamanda Adichie">Chimamanda Adichie</option>
        </select>
        <input required className="categoryInput" type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
        <button type="submit" className="formButton">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
