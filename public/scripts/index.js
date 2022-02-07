export { Book } from './book.js';
export { Genre } from './models.js';
export { BookCollection, ProductCollection } from './book-collection.js';
export { Collection } from './collection.js';
export { Notepad } from './notepad.js';
export { getBookInfo } from './google-books.js';
import { Genre } from './models.js';
import { Book } from './book.js';
import { Notepad } from './notepad.js';
import { DateHelper } from './utils.js';
import { OzonProvider } from './store/providers/ozon/ozon-provider.js';
import { Author } from './store/domain/author.js';
import { Genre as ozonGenre } from './store/domain/genre';
const author = {
    firstName: 'J.K.',
    lastName: 'Rowling',
    rating: 4.7,
};
const book = new Book('Harry Potter', Genre.fantasy, 380, author);
const notepad = new Notepad('Notepad', 30);
const products = [
    book,
    notepad
];
const context = {
    user: {
        clientLevel: 1,
    },
    cart: {
        items: products === null || products === void 0 ? void 0 : products.length,
        totalSum: products === null || products === void 0 ? void 0 : products.reduce((acc, curr) => acc + curr.price, 0),
    }
};
console.log(`${book.getDiscountPrice(context)} instead of ${book.price}`, '\n', `${notepad.getDiscountPrice(context)} instead of ${notepad.price}`);
const now = new Date();
const weekAfter = DateHelper.addDays(DateHelper.cloneDate(now), 7);
console.log(now, weekAfter);
const ozon = new OzonProvider();
const filter = {
    name: 'it',
    genre: ozonGenre.Horror,
    author: new Author('Stephen', 'King')
};
function sortByPrice(one, two) {
    if (one.price > two.price) {
        return 1;
    }
    else if (one.price < two.price) {
        return -1;
    }
    else {
        return 0;
    }
}
Promise.all([ozon.find(filter)])
    .then((result) => {
    if (result[0] !== undefined) {
        const allResults = [...result[0]];
        // allResults.sort(sortByPrice);
    }
});
const removeBook = (id) => Promise.resolve(id);
removeBook.call(null, 5);
function printBookSummary(printItalic = false) {
    let openingTag = '';
    let closingTag = '';
    if (printItalic) {
        openingTag = '<i>';
        closingTag = '</i>';
    }
    console.log(`
        ${openingTag}
        Book ${this.name}
        ${closingTag}
    `);
}
printBookSummary.call(book, true);
try {
    throw new Error();
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}
Promise.resolve({
    id: '5',
    name: 'H',
    author: 'sdf',
}).then((book) => {
    book['author'] !== undefined &&
        book['genre'] !== undefined
        ?
            console.log(book.name, book['author'].toUpperCase(), book['genre'].toLowerCase())
        : console.log('');
});
