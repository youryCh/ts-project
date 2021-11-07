import {Book} from './book.js';
import {books} from './book-collection.js';

/**
 * Находит книгу по жанру и количеству страниц
 * 
 * @param {string} genre Жанр
 * @param {number} pageAmount Количество страниу
 * @returns {Book}
 */
function findSuitableBook (genre: string, pageAmount: number, multipleRecommendations = true): Book | Book[] | undefined {
  const findAlgorithm = (book: Book) => book.genre === genre && book.pageAmount <= pageAmount;

  if (multipleRecommendations) {
    return books.filter(findAlgorithm);
  }

  return books.find(findAlgorithm);
}

const recommendedBook = findSuitableBook('fantasy', 1000);

if (recommendedBook instanceof Book) {
  console.log(recommendedBook.name);
} else {
  console.log(recommendedBook[0].name);
}
