// import {Book} from './book.js';
// import {BookAuthor, Genre, IAuthor, IOptionalAuthor} from './models.js';
// import {BookCollection, ProductCollection} from './book-collection.js';
// import {Collection} from './collection.js';
// import {Notepad} from './notepad.js';
// import {getBookInfo} from './google-books.js';

// const harryPotterIsbn = '9781408845646';

// new Collection<Book, number>();
// new Collection<Book, number>();
// new Collection<Book, symbol>();
// new Collection<Book>();

// const jkRowling: BookAuthor = {
//   firstName: 'J. K.',
//   lastName: 'Rowling',
//   // rating: 4.6,
// };

// const harryPotter = new Book('Harry Potter', Genre.fantasy, 500, jkRowling);

// const superNotepad = new Notepad('Super text', 44);

// const cart = new ProductCollection();
// cart.set(harryPotter.name, harryPotter);
// cart.set(superNotepad.name, superNotepad);

// const favoriteBooksShelf = new BookCollection();
// favoriteBooksShelf.set(harryPotter.name, harryPotter);

// const getSummary = (collection: Collection<unknown>): string => {
//   if (collection instanceof BookCollection) {
//     return `Total ${cart.size} books on the shelf`;
//   }

//   if (collection instanceof ProductCollection) {
//     return `Total ${cart.price} for ${cart.size} items`;
//   }

//   return 'No special summary for this kind of collection';
// };  

// console.log(getSummary(cart));
// console.log(getSummary(favoriteBooksShelf));

// getBookInfo(harryPotterIsbn)
//   .then((book) => {
//     console.log(
//       book.volumeInfo.title,
//       book.volumeInfo.description,
//       book.volumeInfo.authors[0]
//     );
//   })
//   .catch((error) => console.error(error));

// const optionalAuthor: IOptionalAuthor = {
//   rating: 5,
//   booksWritten: 11,
// };

// const fullAuthor: Required<IOptionalAuthor> = {
//   firstName: '',
//   lastName: '',
//   birthDate: new Date(),
//   booksWritten: 1,
//   rating: 2,
// };

// const author: BookAuthor = {
//   firstName: 'J.K.',
//   lastName: 'Rowling',
// };

// const book = new Book('Harry Potter', Genre.fantasy, 100, author);

// console.log(book);

// const authorWithoutRating: Omit<IAuthor, 'rating'> = {
//   firstName: 'first name',
//   lastName: 'last name',
//   birthDate: new Date(),
//   booksWritten: 100500,
// };

// const newAuthor: Partial<IAuthor> = {};

// const anotherAuther: Readonly<IAuthor> = {
//   firstName: '',
//   lastName: '',
//   birthDate: new Date(),
//   booksWritten: 12,
//   rating: 1,
// };

// import {upperCase} from './stringHelper.js';

// console.log(upperCase('bla-bla-bla'));

// const max = Math.max(1, 2);

import {search, lookup} from 'google-books-search';
import {IBook, ICallback} from 'google-books-search';

const searchCallback: ICallback<IBook> = () => {
  search('harry potter and the sorcerer\'s stone', (error, results) => {
    if (error) {
      console.log(error);
    } else {
      console.log(results[0]);
    }
  });
};

search(
  'harry potter and the sorcerer\'s stone',
  {
    type: 'magazines',
  },
  (error, results) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Search results for magazines: ', results);
    }
  }
);

lookup('some book', (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Lookup by ID result: ', result);
  }
});

searchCallback();
