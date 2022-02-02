export class Product {
    constructor(price) {
        this.price = price;
    }
    getDiscountPrice(context) {
        return this.price - this.calculateDiscount(context);
    }
    calculateDiscount(context) {
        return this.price * (context.user.clientLevel * 10) / 100;
    }
}
