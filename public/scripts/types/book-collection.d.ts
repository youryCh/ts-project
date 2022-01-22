import { Book } from './book.js';
import { IProduct } from './models.js';
import { Collection } from './collection.js';
/**
 * Полка с литературой по программированию.
 */
export declare const programmingLiterature: Collection<Book>;
export declare class ProductCollection<T extends IProduct> extends Collection<T> {
    get price(): number;
}
export declare class BookCollection extends ProductCollection<Book> {
}
