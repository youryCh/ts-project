import {
  Genre,
  IAuthor,
  IBook,
  IProduct,
  IRatingable,
  TReview
} from './models';

export class Book implements IBook, IRatingable, IProduct {
  name: string;
  genre: Genre;
  price: number;
  reviews?: TReview[];
  author?: IAuthor;
  rating: number;
  getProductDescription(): string {
    return `Book "${this.name}" by ${this.author.firstName} ${this.author.lastName}`
  }
  
  constructor (
    name: string,
    genre: Genre,
    price: number,
    author?: IAuthor,
    reviews?: TReview[],
  ) {
    this.name = name;
    this.genre = genre;
    this.price = price;
    this.author = author;

    if (reviews?.length > 0) {
      const reviewSum = this.reviews?.reduce((acc, cur) => acc + cur[1], 0);
      this.rating = reviewSum / this.reviews?.length;
    } else {
      this.rating = null;
    }
  }
}
