export type TReview = [string, number, string];

export interface IBook {
  name: string;
  genre: string;
  price: number;
  reviews?: TReview[];
  author?: IAuthor;
}

export interface IAuthor {
  firstName: string;
  lastName: string;
}
