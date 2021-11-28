import { Book } from './book.js';
import { Genre } from './models.js';

export const books = [
  new Book('Harry Potter and the Philosopher\'s Stone', Genre.fantasy, 980),
  new Book('The Lord of the Rings', Genre.adventure, 1001),
  new Book('Harry Potter 2', Genre.fantasy, 970),
  new Book('Harry Potter 3', Genre.horror, 985)
];
