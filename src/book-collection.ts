import {Book} from './book.js';
import {Genre, IBookCollection} from './models.js';
import {Collection} from './collection.js';

/**
 * Полка с литературой по программированию.
 */
export const programmingLiterature: Collection<string, Book> = new Collection(); 

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

export const getFromMap = <K, V>(data: Collection<K, V>, key: K): V => {
  const value = data.get(key);

  if (value === null) {
    throw Error(`There are no item with key "${key}"`);
  }

  return value;
};
