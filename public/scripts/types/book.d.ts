import { BookAuthor, Genre, IBook, IProduct, IRatingable, TReview } from './models';
export declare class Book implements IBook, IRatingable, IProduct {
    name: string;
    genre: Genre;
    price: number;
    author: BookAuthor;
    readonly rating: number;
    readonly reviews: TReview[];
    constructor(name: string, genre: Genre, price: number, author: BookAuthor, reviews?: TReview[]);
    getProductDescription(): string;
    addReview(review: TReview): void;
    removeReview(review: TReview): void;
    calculateRating(): void;
}
