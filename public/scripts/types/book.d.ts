import { BookAuthor, Genre, IRatingable, TReview, IPurchaseContext } from './models.js';
import { Product } from './product.js';
export declare class Book extends Product implements IRatingable {
    name: string;
    genre: Genre;
    author: BookAuthor;
    private _rating?;
    private reviews;
    private static itemsForIncreasedDiscount;
    private static sumForIncreasedDiscount;
    constructor(name: string, genre: Genre, price: number, author: BookAuthor, _rating?: number | undefined, reviews?: TReview[]);
    getProductDescription(): string;
    addReview(review: TReview): void;
    removeReview(review: TReview): void;
    get rating(): number;
    getRreviews(): Readonly<TReview[]>;
    private calculateRating;
    protected calculateDiscount(context: IPurchaseContext): number;
}
