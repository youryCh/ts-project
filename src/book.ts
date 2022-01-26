import {
  BookAuthor,
  Genre,
  IAuthor,
  IBook,
  IProduct,
  IRatingable,
  TReview
} from './models.js';
import {Product} from './product.js';
import { IPurchaseContext } from './purchase-context.js';

export class Book extends Product implements IRatingable {
  name: string;
  genre: Genre;
  price: number;
  author: BookAuthor;
  private _rating: number;
  private reviews: TReview[];
    
  constructor (
    name: string,
    genre: Genre,
    price: number,
    author: BookAuthor,
    reviews?: TReview[],
  ) {
    super();
    this.name = name;
    this.genre = genre;
    this.price = price;
    this.author = author;

    if (reviews) {
      this.reviews = reviews;
    } else {
      this.reviews = null;
    }

    this.calculateRating ();
  }

  getProductDescription (): string {
    return `Book "${this.name}" by ${this.author.firstName} ${this.author.lastName}`;
  }

  addReview (review: TReview): void {
    this.reviews.push(review);
    this.calculateRating ();
  }

  removeReview (review: TReview): void {
    const index = this.reviews.indexOf(review);

    if (index > -1) {
      this.reviews.splice(index, 1);
      this.calculateRating();
    }
  }

  get rating (): number {
    return this._rating;
  }

  getRreviews (): Readonly<TReview[]> {
    return this.reviews;
  }

  private calculateRating (): void {
    if (this.reviews.length > 0) {
      const reviewSum = this.reviews.reduce((acc, curr) => acc + curr[1], 0);

      this._rating = reviewSum / this.reviews.length;
    } else {
      this._rating = null;
    }
  }

  protected calculateDiscount(context: IPurchaseContext): number {
    const {cart: {items, totalSum}, user: {clientLevel}} = context ?? {};

    if (items >= 3 && totalSum >= 3000) {
      return this.price * 35 / 100;
    } else {
      return this.price * (clientLevel * 10) / 100;
    }
  }
}
