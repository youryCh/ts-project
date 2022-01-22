import { BookAuthor, Genre, IBook, IProduct, IRatingable, TReview } from './models';
export declare class Book implements IBook, IRatingable, IProduct {
    name: string;
    genre: Genre;
    price: number;
    reviews?: TReview[];
    author: BookAuthor;
    rating: number;
    getProductDescription(): string;
    constructor(name: string, genre: Genre, price: number, author: BookAuthor, reviews?: TReview[]);
}
