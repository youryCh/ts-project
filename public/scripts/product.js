export class Product {
    getProductDescription() {
        return 'Some product';
    }
    getDiscountPrice(context) {
        return this.price - this.calculateDiscount(context);
    }
    calculateDiscount(context) {
        return this.price * (context.user.clientLevel * 10) / 100;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxPQUFPO0lBR2xCLHFCQUFxQjtRQUNuQixPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBRUQsZ0JBQWdCLENBQUUsT0FBeUI7UUFDekMsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRVMsaUJBQWlCLENBQUUsT0FBeUI7UUFDcEQsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzVELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVB1cmNoYXNlQ29udGV4dH0gZnJvbSAnLi9wdXJjaGFzZS1jb250ZXh0LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0IHtcclxuICBwcmljZTogbnVtYmVyO1xyXG5cclxuICBnZXRQcm9kdWN0RGVzY3JpcHRpb24gKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ1NvbWUgcHJvZHVjdCc7XHJcbiAgfVxyXG5cclxuICBnZXREaXNjb3VudFByaWNlIChjb250ZXh0OiBJUHVyY2hhc2VDb250ZXh0KTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnByaWNlIC0gdGhpcy5jYWxjdWxhdGVEaXNjb3VudChjb250ZXh0KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjYWxjdWxhdGVEaXNjb3VudCAoY29udGV4dDogSVB1cmNoYXNlQ29udGV4dCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmljZSAqIChjb250ZXh0LnVzZXIuY2xpZW50TGV2ZWwgKiAxMCkgLyAxMDA7XHJcbiAgfVxyXG59XHJcbiJdfQ==