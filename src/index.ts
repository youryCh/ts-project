import {Book} from './book.js';
import {Genre, IAuthor} from './models.js';
import {BookCollection, ProductCollection} from './book-collection.js';
import {Collection} from './collection.js';
import {Notepad} from './notepad.js';

new Collection<Book, number>();
new Collection<Book, number>();
new Collection<Book, symbol>();
new Collection<Book>();

const jkRowling: IAuthor = {
  firstName: 'J. K.',
  lastName: 'Rowling',
  rating: 4.6,
};

const harryPotter = new Book('Harry Potter', Genre.fantasy, 500, jkRowling);

const superNotepad = new Notepad('Super text', 44);

const cart = new ProductCollection();
cart.set(harryPotter.name, harryPotter);
cart.set(superNotepad.name, superNotepad);

const favoriteBooksShelf = new BookCollection();
favoriteBooksShelf.set(harryPotter.name, harryPotter);

const getSummary = (collection: Collection<unknown>): string => {
  if (collection instanceof BookCollection) {
    return `Total ${cart.size} books on the shelf`;
  }

  if (collection instanceof ProductCollection) {
    return `Total ${cart.price} for ${cart.size} items`;
  }

  return 'No special summary for this kind of collection';
};  

console.log(getSummary(cart));
console.log(getSummary(favoriteBooksShelf));
