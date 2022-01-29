import { IRatingable, IProduct, Genre } from './models.js';
/**
 * Возвращает переданный параметром объект в виде строки.
 *
 * @param {unknown} value - входной параметр, обычно типа object.
 * @returns {string} - сериализованный объект.
 */
export declare function serialize(value: unknown): string;
/**
 * Показывает рейтинг книги или автора в виде звездочек.
 *
 * @param {IRatingable} entity - рейтинг
 * @returns {string} - рейтинг в виде *
 */
export declare const showRating: (entity: IRatingable) => string;
/**
 * Функция для отображения корзины продуктов.
 *
 * @param {IProduct} products - массив продуктов
 * @returns {void}
 */
export declare const showCart: (products: IProduct[]) => void;
/**
 * Функция для получения имени жинраю
 *
 * @param {Genre} genre - жанр из енама
 * @returns {string} - имя жанра в строковом виде
 */
export declare const getGenreName: (genre: Genre) => string;
/**
 * Хелпер для работы с датами.
 */
export declare abstract class DateHelper {
    static cloneDate(date: Date): Date;
    static addDays(date: Date, days: number): Date;
}
