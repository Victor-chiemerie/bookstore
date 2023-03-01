// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

const bookStore = [
  {
    id: uuidv4(),
    title: 'Game of Thrones',
    author: 'J.R Tolkein',
    category: 'fiction',
  },
  {
    id: uuidv4(),
    title: 'There was a Country',
    author: 'Chinua Achebe',
    category: 'action',
  },
  {
    id: uuidv4(),
    title: 'Half of a Yellow Sun',
    author: 'Chimamanda Adichie',
    category: 'horror',
  },
  {
    id: uuidv4(),
    title: 'Welcome to Lagos',
    author: 'Chibundu Onuzo',
    category: 'romance',
  },
];

export default bookStore;
