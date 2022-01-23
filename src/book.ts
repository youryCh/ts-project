import {
  BookAuthor,
  Genre,
  IAuthor,
  IBook,
  IProduct,
  IRatingable,
  TReview
} from './models';

export class Book implements IRatingable, IProduct {
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
}
