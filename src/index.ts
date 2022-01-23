export {Book} from './book.js';
export {BookAuthor, Genre, IAuthor, IOptionalAuthor} from './models.js';
export {BookCollection, ProductCollection} from './book-collection.js';
export {Collection} from './collection.js';
export {Notepad} from './notepad.js';
export {getBookInfo} from './google-books.js';

import {IAuthor} from './models.js';
import {Book} from './book.js';
import {Genre} from './models.js';

const author: IAuthor = {
  firstName: 'J.K.',
  lastName: 'Rowling',
  rating: 4.7,
};

const book = new Book('Harry Potter', Genre.fantasy, 380, author);

console.log(book.rating);

console.log(book.rating);
