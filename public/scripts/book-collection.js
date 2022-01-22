import { Book } from './book.js';
import { Genre } from './models.js';
import { Collection } from './collection.js';
/**
 * Полка с литературой по программированию.
 */
export const programmingLiterature = new Collection();
programmingLiterature.set('Cracking the coging interview', new Book('Cracking the coging interview', Genre.programming, 100, {
    firstName: 'Gayle',
    lastName: 'Laakmann',
    // rating: 5,
}));
export class ProductCollection extends Collection {
    get price() {
        let totalPrice = 0;
        const keys = Object.getOwnPropertyNames(this.items);
        for (const key of keys) {
            const item = this.items[key];
            totalPrice += item.price;
        }
        return totalPrice;
    }
}
export class BookCollection extends ProductCollection {
}
