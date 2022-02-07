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
}));
export class ProductCollection extends Collection {
    get price() {
        var _a;
        let totalPrice = 0;
        const keys = Object.getOwnPropertyNames(this.items);
        for (const key of keys) {
            const item = this.items[key];
            totalPrice += (_a = item === null || item === void 0 ? void 0 : item.price) !== null && _a !== void 0 ? _a : 0;
        }
        return totalPrice;
    }
}
export class BookCollection extends ProductCollection {
}
