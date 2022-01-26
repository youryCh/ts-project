import { Product } from './product.js';
export class Notepad extends Product {
    constructor(name, price) {
        super();
        this.name = name;
        this.price = price;
    }
    getProductDescription() {
        return `Notepad "${this.name}"`;
    }
    calculateDiscount() {
        return 0;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXBhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub3RlcGFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFckMsTUFBTSxPQUFPLE9BQVEsU0FBUSxPQUFPO0lBSWxDLFlBQWEsSUFBWSxFQUFFLEtBQWE7UUFDdEMsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQscUJBQXFCO1FBQ25CLE9BQU8sWUFBWSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUM7SUFDbEMsQ0FBQztJQUVTLGlCQUFpQjtRQUN6QixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVByb2R1Y3R9IGZyb20gJy4vbW9kZWxzJztcclxuaW1wb3J0IHtQcm9kdWN0fSBmcm9tICcuL3Byb2R1Y3QuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGVwYWQgZXh0ZW5kcyBQcm9kdWN0IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcHJpY2U6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IgKG5hbWU6IHN0cmluZywgcHJpY2U6IG51bWJlcikge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9kdWN0RGVzY3JpcHRpb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgTm90ZXBhZCBcIiR7dGhpcy5uYW1lfVwiYDsgIFxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNhbGN1bGF0ZURpc2NvdW50KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbn1cclxuIl19