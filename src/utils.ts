import {Book} from './book';
import {books} from './book-collection';

/**
 * Находит книгу по жанру и количеству страниц
 * 
 * @param {string} genre Жанр
 * @param {number} pageAmount Количество страниу
 * @returns {Book}
 */
export function findSuitableBook (genre: string, pageAmount: number, multipleRecommendations = true): Book | Book[] | undefined {
  const findAlgorithm = (book: Book) => book.genre === genre && book.price <= pageAmount;

  if (multipleRecommendations) {
    return books.filter(findAlgorithm);
  }

  return books.find(findAlgorithm);
}

/**
 * Возвращает переданный параметром объект в виде строки.
 * 
 * @param {unknown} value - входной параметр, обычно типа object.
 * @returns {string} - сериализованный объект.
 */
export function serialize (value: unknown) {
  if (value === null || undefined) {
    return value + '';
  }

  if (value instanceof Book) {
    return `${value.name}, ${value.genre}, ${value.price}`;
  }

  return value.toString();
}
