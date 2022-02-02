import { Author } from './author.js';
import { Genre } from './genre.js';
export declare class Book {
    private readonly provider;
    readonly originalId: string;
    readonly name: string;
    readonly genre: Genre | undefined;
    readonly description: string;
    readonly pages: number;
    readonly price: number;
    readonly author: Author;
    constructor(provider: string, originalId: string, name: string, genre: Genre | undefined, description: string, pages: number, price: number, author: Author);
    /**
     * Функция возвращает id для внутреннего использования.
     */
    get id(): string;
    isProvidedBy(providerName: string): boolean;
}
