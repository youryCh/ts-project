import {
    BookAuthor,
    Genre,
    IRatingable,
    TReview,
    IPurchaseContext
} from './models.js';
import {Product} from './product.js';

export class Book extends Product implements IRatingable {
    private reviews: TReview[];
    private static itemsForIncreasedDiscount = 3;
    private static sumForIncreasedDiscount = 3000;
    
    constructor (
    public name: string,
    public genre: Genre,
    price: number,
    public author: BookAuthor,
    private _rating?: number | null,
    reviews?: TReview[],
    ) {
        super(price);

        if (reviews) {
            this.reviews = reviews;
        } else {
            this.reviews = [];
        }

        this.calculateRating ();
    }

    public getProductDescription (): string {
        return `Book "${this.name}" by ${this.author.firstName} ${this.author.lastName}`;
    }

    public addReview (review: TReview): void {
        this.reviews.push(review);
        this.calculateRating ();
    }

    public removeReview (review: TReview): void {
        const index = this.reviews.indexOf(review);

        if (index > -1) {
            this.reviews.splice(index, 1);
            this.calculateRating();
        }
    }

    public get rating (): number | null {
        return this._rating =null;
    }

    public getRreviews (): Readonly<TReview[]> {
        return this.reviews;
    }

    private calculateRating (): void {
        if (this.reviews?.length > 0) {
            const reviewSum = this.reviews.reduce((acc, curr) => acc + curr[1], 0);

            this._rating = reviewSum / this.reviews?.length;
        } else {
            this._rating = 0;
        }
    }

    protected calculateDiscount(context: IPurchaseContext): number {
        const {cart: {items, totalSum}} = context ?? {};
        const hasDiscount: boolean = 
      items >= Book.itemsForIncreasedDiscount &&
      totalSum >= Book.sumForIncreasedDiscount;

        if (hasDiscount) {
            return this.price * 35 / 100;
        } else {
            return super.calculateDiscount(context);
        }
    }
}
