import {Book} from './book.js';
import {Genre, IProduct} from './models.js';
import {Collection} from './collection.js';

/**
 * Полка с литературой по программированию.
 */
export const programmingLiterature: Collection<Book> = new Collection(); 

programmingLiterature.set(
  'Cracking the coging interview',
  new Book (
    'Cracking the coging interview', Genre.programming, 100,
    {
      firstName: 'Gayle',
      lastName: 'Laakmann',
      rating: 5,
    },
  )
);

export class ProductCollection<T extends IProduct> extends Collection<T> {
  get price (): number {
    let totalPrice = 0;
    const keys = Object.getOwnPropertyNames(this.items);

    for (const key of keys) {
      const item: T = this.items[key];
      totalPrice += item.price;
    }

    return totalPrice;
  }
}

export class BookCollection extends ProductCollection<Book> {}  
