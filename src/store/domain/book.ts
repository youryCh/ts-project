import {Author} from './author.js';
import {Genre} from './genre.js';

export class Book {
    constructor (
        private readonly provider: string,
        public readonly originalId: string,
        public readonly name: string,
        public readonly genre: Genre,
        public readonly description: string,
        public readonly pages: number,
        public readonly price: number,
        public readonly author: Author
    ) {}

    /**
     * Функция возвращает id для внутреннего использования.
     */
    get id (): string {
        return `${this.provider}_${this.originalId}`;
    }

    public isProvidedBy (providerName: string): boolean {
        return this.provider === providerName;
    }
}
