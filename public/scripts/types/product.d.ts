import { IPurchaseContext } from './models.js';
export declare abstract class Product {
    price: number;
    constructor(price: number);
    abstract getProductDescription(): string;
    getDiscountPrice(context: IPurchaseContext): number;
    protected calculateDiscount(context: IPurchaseContext): number;
}
