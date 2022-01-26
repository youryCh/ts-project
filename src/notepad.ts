import {IProduct} from './models';
import {Product} from './product.js';

export class Notepad extends Product {
  name: string;
  price: number;

  constructor (name: string, price: number) {
    super();
    this.name = name;
    this.price = price;
  }

  getProductDescription(): string {
    return `Notepad "${this.name}"`;  
  }

  protected calculateDiscount(): number {
    return 0;
  }
}
