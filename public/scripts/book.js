import { Product } from './product.js';
export class Book extends Product {
    constructor(name, genre, price, author, _rating = 0, reviews) {
        super(price);
        this.name = name;
        this.genre = genre;
        this.author = author;
        this._rating = _rating;
        if (reviews) {
            this.reviews = reviews;
        }
        else {
            this.reviews = [];
        }
        this.calculateRating();
    }
    getProductDescription() {
        return `Book "${this.name}" by ${this.author.firstName} ${this.author.lastName}`;
    }
    addReview(review) {
        this.reviews.push(review);
        this.calculateRating();
    }
    removeReview(review) {
        const index = this.reviews.indexOf(review);
        if (index > -1) {
            this.reviews.splice(index, 1);
            this.calculateRating();
        }
    }
    get rating() {
        return this._rating;
    }
    getRreviews() {
        return this.reviews;
    }
    calculateRating() {
        var _a, _b;
        if (((_a = this.reviews) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            const reviewSum = this.reviews.reduce((acc, curr) => acc + curr[1], 0);
            this._rating = reviewSum / ((_b = this.reviews) === null || _b === void 0 ? void 0 : _b.length);
        }
        else {
            this._rating;
        }
    }
    calculateDiscount(context) {
        const { cart: { items, totalSum } } = context !== null && context !== void 0 ? context : {};
        const hasDiscount = items >= Book.itemsForIncreasedDiscount &&
            totalSum >= Book.sumForIncreasedDiscount;
        if (hasDiscount) {
            return this.price * 35 / 100;
        }
        else {
            return super.calculateDiscount(context);
        }
    }
}
Book.itemsForIncreasedDiscount = 3;
Book.sumForIncreasedDiscount = 3000;
