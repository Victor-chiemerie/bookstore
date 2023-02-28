// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

const bookStore = [
  {
    id: uuidv4(),
    title: 'Game of Thrones',
    author: 'J.R Tolkein',
  },
  {
    id: uuidv4(),
    title: 'There was a Country',
    author: 'Chinua Achebe',
  },
  {
    id: uuidv4(),
    title: 'Half of a Yellow Sun',
    author: 'Chimamanda Adichie',
  },
  {
    id: uuidv4(),
    title: 'Welcome to Lagos',
    author: 'Chibundu Onuzo',
  },
];

export default bookStore;
