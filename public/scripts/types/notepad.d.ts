import { Product } from './product.js';
export declare class Notepad extends Product {
    name: string;
    constructor(name: string, price: number);
    getProductDescription(): string;
    protected calculateDiscount(): number;
}
