declare module 'google-books-search' {
  export type TISBN = 'ISBN_10' | 'ISBN_13' | 'ISSN' | 'OTHER';
  export type TPrintType = 'BOOK' | 'MAGAZINE';
  export type TMaturityRating = 'NOT_MATURE' | 'MATURE' | string;
  export type TSearchField = 'title' | 'author' | 'publisher' | 'subject' | 'isbn';
  export type TSearchOrder = 'relevance'| 'newest';
  export type TSearchType = 'all' | 'magazines' | 'books';
  export type TLanguageCode = 'en' | 'ru' | string;

  export interface IIndustryIdentifiers {
    type: TISBN;
    identifier: string;
  }
  
  export interface IBook {
    title: string;
    authors: string[];
    publishedDate: string;
    description: string;
    industryIdentifiers: IIndustryIdentifiers[];
    pageCount: number;
    printType: TPrintType,
    categories: string[],
    averageRating: number,
    ratingsCount: number,
    maturityRating: TMaturityRating,
    language: string,
    id: string,
    link: string,
    thumbnail: string
  }

  export interface ICallback<R> {
    (error?: Error, result?: R)
  }

  export interface ISearchOptions {
    key?: string;
    field?: TSearchField;
    offset?: number;
    limit?: number;
    type?: TSearchType;
    order?: TSearchOrder;
    lang?: TLanguageCode;
  }

  export function search (query: string, callback: ICallback<IBook[]>): void

  export function search (
    query: string,
    options: ISearchOptions,
    callback: ICallback<IBook[]>
  ): void

  export function lookup (id: string, callback: ICallback<IBook>): void
}
