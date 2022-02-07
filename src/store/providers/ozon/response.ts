/**
 * Ответ с несколькими книгами.
 */
export interface IBookListResponse {
    errorMessage?: string;
    items: Book[];
}

/**
 * Ответ с одной книгой.
 */
export interface IBookResponse {
    errorMessage?: string;
    item: Book;
}

/**
 * Структура книги.
 */
export interface Book {
    id: number;
    title: string;
    author: IAuthor[];
    price: number;
    genre: string;
    pageCount: number;
    daecription: string;
}

/**
 * Структура автора.
 */
export interface IAuthor {
    name: string;
    surname: string;
}
