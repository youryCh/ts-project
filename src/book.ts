import {
  BookAuthor,
  Genre,
  IRatingable,
  TReview,
  IPurchaseContext
} from './models.js';
import {Product} from './product.js';

export class Book extends Product implements IRatingable {
  public name: string;
  public genre: Genre;
  public author: BookAuthor;
  private _rating: number;
  private reviews: TReview[];
    
  constructor (
    name: string,
    genre: Genre,
    price: number,
    author: BookAuthor,
    reviews?: TReview[],
  ) {
    super(price);
    this.name = name;
    this.genre = genre;
    this.author = author;

    if (reviews) {
      this.reviews = reviews;
    } else {
      this.reviews = null;
    }

    this.calculateRating ();
  }

  public getProductDescription (): string {
    return `Book "${this.name}" by ${this.author.firstName} ${this.author.lastName}`;
  }

  public addReview (review: TReview): void {
    this.reviews.push(review);
    this.calculateRating ();
  }

  public removeReview (review: TReview): void {
    const index = this.reviews.indexOf(review);

    if (index > -1) {
      this.reviews.splice(index, 1);
      this.calculateRating();
    }
  }

  public get rating (): number {
    return this._rating;
  }

  public getRreviews (): Readonly<TReview[]> {
    return this.reviews;
  }

  private calculateRating (): void {
    if (this.reviews?.length > 0) {
      const reviewSum = this.reviews.reduce((acc, curr) => acc + curr[1], 0);

      this._rating = reviewSum / this.reviews?.length;
    } else {
      this._rating = null;
    }
  }

  protected calculateDiscount(context: IPurchaseContext): number {
    const {cart: {items, totalSum}} = context ?? {};

    if (items >= 3 && totalSum >= 3000) {
      return this.price * 35 / 100;
    } else {
      return super.calculateDiscount(context);
    }
  }
}
