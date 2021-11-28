import {Book} from './book.js';
import {IBook} from './models.js';
import {findSuitableBook} from './utils';
import {reviews, author} from './constants';
import './utils';
import './constants';

const recommendedBook = findSuitableBook('fantasy', 1000);

if (recommendedBook instanceof Book) {
  console.log(recommendedBook.name);
} else {
  console.log(recommendedBook[0].name);
}

const genre = 'fantasy';
const price = 300;

const book: IBook = new Book('Potterr', genre, price, reviews, author);

console.log(book);
