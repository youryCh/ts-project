import { Product } from './product.js';
export class Notepad extends Product {
    constructor(name, price) {
        super(price);
        this.name = name;
    }
    getProductDescription() {
        return `Notepad "${this.name}"`;
    }
    calculateDiscount() {
        return 0;
    }
}
