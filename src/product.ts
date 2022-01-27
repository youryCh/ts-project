import {IPurchaseContext} from './models.js';

export class Product {
  public price: number;

  constructor (price: number) {
    this.price = price;
  }

  public getProductDescription (): string {
    return 'Some product';
  }

  public getDiscountPrice (context: IPurchaseContext): number {
    return this.price - this.calculateDiscount(context);
  }

  protected calculateDiscount (context: IPurchaseContext): number {
    return this.price * (context.user.clientLevel * 10) / 100;
  }
}
