export {Book} from './book.js';
export {BookAuthor, Genre, IAuthor, IOptionalAuthor} from './models.js';
export {BookCollection, ProductCollection} from './book-collection.js';
export {Collection} from './collection.js';
export {Notepad} from './notepad.js';
export {getBookInfo} from './google-books.js';

import {IAuthor, IPurchaseContext, Genre} from './models.js';
import {Book} from './book.js';
import {Notepad} from './notepad.js';
import {Product} from './product.js';
import {DateHelper} from './utils.js';
import { OzonProvider } from './store/providers/ozon/ozon-provider.js';
import { ISearchFilter } from './store/domain/search-filter.js';
import { Author } from './store/domain/author.js';
import {Genre as ozonGenre} from './store/domain/genre';

const author: IAuthor = {
    firstName: 'J.K.',
    lastName: 'Rowling',
    rating: 4.7,
};

const book = new Book('Harry Potter', Genre.fantasy, 380, author);

const notepad = new Notepad('Notepad', 30);

const products: Product[] = [
    book,
    notepad
];

const context: IPurchaseContext = {
    user: {
        clientLevel: 1,
    },
    cart: {
        items: products?.length,
        totalSum: products?.reduce((acc, curr) => acc + curr.price, 0),
    }
}

console.log(
    `${book.getDiscountPrice(context)} instead of ${book.price}`,
    '\n',
    `${notepad.getDiscountPrice(context)} instead of ${notepad.price}`
);

const now = new Date();
const weekAfter = DateHelper.addDays(DateHelper.cloneDate(now), 7);

console.log(now, weekAfter);

const ozon = new OzonProvider();

const filter: ISearchFilter = {
    name: 'it',
    genre: ozonGenre.Horror,
    author: new Author('Stephen', 'King')
};

function sortByPrice (one: Book, two: Book) {
    if (one.price > two.price) {
        return 1;
    } else if (one.price < two.price) {
        return -1;
    } else {
        return 0;
    }
}

Promise.all([ozon.find(filter)])
    .then((result) => {
        const allResults = [...result[0]];
        // allResults.sort(sortByPrice);
    })
