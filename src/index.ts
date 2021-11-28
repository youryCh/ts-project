import {Book} from './book.js';
import {findSuitableBook, getGenreName, showCart, showRating} from './utils.js';
import {reviews, author, notepad} from './constants.js';
import {Genre} from './models.js';

const recommendedBook = findSuitableBook(Genre.fantasy, 1000);

if (recommendedBook instanceof Book) {
  console.log(recommendedBook.name);
} else {
  console.log(recommendedBook[0].name);
}

const genre = Genre.horror;
const price = 300;

const book = new Book('Potterr', genre, price, reviews, author);

showCart([book, notepad]);

console.log(getGenreName(book.genre));
