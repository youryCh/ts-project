import {Author} from './author';
import {Genre} from './genre';

/**
 * Модель данных фильтра.
 * 
 * @param {string} name Название книги.
 * @param {Author} [author] Автор книги.
 * @param {Genre} [genre] Жанр книги.
 */
export interface ISearchFilter {
    name: string;
    author?: Author;
    genre?: Genre;
}
