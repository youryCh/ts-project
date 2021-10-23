class Book {
  name: string;
  genre: string;
  pageAmount: number;
  
  constructor (name: string, genre: string, pageAmount: number) {
    this.name = name;
    this.genre = genre;
    this.pageAmount = pageAmount;
  }
}

const books = [
  new Book('Harry Potter', 'fantasy', 980),
  new Book('The Lord of the Rings', 'fantasy', 1001),
  new Book('Harry Potter 2', 'fantasy', 970),
  new Book('Harry Potter 3', 'fantasy', 985)
];

/**
 * Находит книгу по жанру и количеству страниц
 * 
 * @param {string} genre Жанр
 * @param {number} pageAmount Количество страниу
 * @returns {Book}
 */
function findSuitableBook (genre: string, pageAmount: number, multipleRecommendations: boolean = true): Book | Book[] {
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
  recommendedBook.forEach(book => console.log(book.name));
}
