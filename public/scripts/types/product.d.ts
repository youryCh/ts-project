import { IPurchaseContext } from './models.js';
export declare class Product {
    price: number;
    constructor(price: number);
    getProductDescription(): string;
    getDiscountPrice(context: IPurchaseContext): number;
    protected calculateDiscount(context: IPurchaseContext): number;
}
