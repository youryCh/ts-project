import {Book} from './book.js';
import {programmingLiterature as books} from './book-collection.js';
import {IRatingable, IProduct, Genre} from './models.js';
import {genreMapping} from './constants.js';

/**
 * Находит книгу по жанру и количеству страниц
 * 
 * @param {string} genre Жанр
 * @param {number} pageAmount Количество страниу
 * @returns {Book}
 */
// export function findSuitableBook (genre: Genre, pageAmount: number, multipleRecommendations = true): Book | Book[] | undefined {
//   const findAlgorithm = (book: Book) => book.genre === genre && book.price <= pageAmount;

// if (multipleRecommendations) {
//   return books.get(findAlgorithm);
// }

// return books.get(findAlgorithm());
// }

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


/**
 * Показывает рейтинг книги или автора в виде звездочек.
 * 
 * @param {IRatingable} entity - рейтинг
 * @returns {string} - рейтинг в виде *
 */
export const showRating = (entity: IRatingable) => {
  if (entity.rating === null) {
    return 'not rated yet';
  }

  const roundedRating = Math.round(entity.rating);

  let rating = '';

  for (let i = 0; i < roundedRating; i++) {
    rating += ' * ';
  }

  return rating + ` (${entity.rating.toFixed(2)})`;
}

/**
 * Функция для отображения корзины продуктов.
 * 
 * @param {IProduct} products - массив продуктов
 * @returns {void}
 */
export const showCart = (products: IProduct[]) => {
  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice += product.price;
    console.log(`${product.getProductDescription()} x ${product.price} rub. `);
  });

  console.log(`\nTotal items: ${products.length}, total cost: ${totalPrice}`);
}

/**
 * Функция для получения имени жинраю
 * 
 * @param {Genre} genre - жанр из енама
 * @returns {string} - имя жанра в строковом виде
 */
export const getGenreName = (genre: Genre): string => genreMapping[genre];
