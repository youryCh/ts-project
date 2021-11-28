import {IAuthor, TReview} from './models';

export class Book {
  name: string;
  genre: string;
  price: number;
  reviews?: TReview[];
  author?: IAuthor;
  
  constructor (
    name: string,
    genre: string,
    price: number,
    reviews?: TReview[],
    author?: IAuthor
  ) {
    this.name = name;
    this.genre = genre;
    this.price = price;
    this.author = author;

    if (reviews) {
      this.reviews = reviews;
    } else {
      this.reviews = [];
    }
  }
}
