import {Product} from './product.js';

export class Notepad extends Product {
  public name: string;

  constructor (name: string, price: number) {
    super(price);
    this.name = name;
  }

  public getProductDescription(): string {
    return `Notepad "${this.name}"`;  
  }

  protected calculateDiscount(): number {
    return 0;
  }
}
