export class Book {
    constructor(provider, originalId, name, genre, description, pages, price, author) {
        this.provider = provider;
        this.originalId = originalId;
        this.name = name;
        this.genre = genre;
        this.description = description;
        this.pages = pages;
        this.price = price;
        this.author = author;
    }
    /**
     * Функция возвращает id для внутреннего использования.
     */
    get id() {
        return `${this.provider}_${this.originalId}`;
    }
    isProvidedBy(providerName) {
        return this.provider === providerName;
    }
}
