import {IPurchaseContext} from './purchase-context.js';

export class Product {
  price: number;

  getProductDescription (): string {
    return 'Some product';
  }

  getDiscountPrice (context: IPurchaseContext): number {
    return this.price - this.calculateDiscount(context);
  }

  protected calculateDiscount (context: IPurchaseContext): number {
    return this.price * (context.user.clientLevel * 10) / 100;
  }
}
