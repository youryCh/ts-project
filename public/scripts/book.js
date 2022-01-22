export class Book {
    constructor(name, genre, price, author, reviews) {
        var _a, _b;
        this.name = name;
        this.genre = genre;
        this.price = price;
        this.author = author;
        if ((reviews === null || reviews === void 0 ? void 0 : reviews.length) > 0) {
            const reviewSum = (_a = this.reviews) === null || _a === void 0 ? void 0 : _a.reduce((acc, cur) => acc + cur[1], 0);
            this.rating = reviewSum / ((_b = this.reviews) === null || _b === void 0 ? void 0 : _b.length);
        }
        else {
            this.rating = null;
        }
    }
    getProductDescription() {
        return `Book "${this.name}" by ${this.author.firstName} ${this.author.lastName}`;
    }
}
