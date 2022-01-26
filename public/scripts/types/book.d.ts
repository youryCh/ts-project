import { BookAuthor, Genre, IRatingable, TReview } from './models.js';
import { Product } from './product.js';
import { IPurchaseContext } from './purchase-context.js';
export declare class Book extends Product implements IRatingable {
    name: string;
    genre: Genre;
    price: number;
    author: BookAuthor;
    private _rating;
    private reviews;
    constructor(name: string, genre: Genre, price: number, author: BookAuthor, reviews?: TReview[]);
    getProductDescription(): string;
    addReview(review: TReview): void;
    removeReview(review: TReview): void;
    get rating(): number;
    getRreviews(): Readonly<TReview[]>;
    private calculateRating;
    protected calculateDiscount(context: IPurchaseContext): number;
}