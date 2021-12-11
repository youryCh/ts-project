export type TReview = [string, number, string];

export interface IBook {
  name: string;
  genre: Genre;
  price: number;
  reviews?: TReview[];
  author?: IAuthor;
}

export interface IAuthor extends IRatingable {
  firstName: string;
  lastName: string;
}

export interface IRatingable {
  rating: number;
}

export interface IProduct {
  price: number;
  getProductDescription(): string;
}

export enum Genre {fantasy, adventure, horror, programming}

export interface IBookCollection<T> {
  [key: string]: T;
}
