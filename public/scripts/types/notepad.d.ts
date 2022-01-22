import { IProduct } from './models';
export declare class Notepad implements IProduct {
    name: string;
    price: number;
    constructor(name: string, price: number);
    getProductDescription(): string;
}
