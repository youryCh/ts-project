import {IPurchaseContext} from './models.js';

export abstract class Product {
  constructor (public price: number) {}

  public abstract getProductDescription (): string

  public getDiscountPrice (context: IPurchaseContext): number {
    return this.price - this.calculateDiscount(context);
  }

  protected calculateDiscount (context: IPurchaseContext): number {
    return this.price * (context.user.clientLevel * 10) / 100;
  }
}
