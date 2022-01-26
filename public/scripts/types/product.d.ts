import { IPurchaseContext } from './purchase-context.js';
export declare class Product {
    price: number;
    getProductDescription(): string;
    getDiscountPrice(context: IPurchaseContext): number;
    protected calculateDiscount(context: IPurchaseContext): number;
}
