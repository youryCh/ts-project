export class Collection {
    constructor() {
        this.items = {};
    }
    get size() {
        return Object.keys(this.items).length;
    }
    set(key, value) {
        this.items[key] = value;
    }
    get(key) {
        return this.items[key];
    }
    has(key) {
        return this.items[key] !== null;
    }
    delete(key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }
    clear() {
        this.items = {};
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxVQUFVO0lBQXZCO1FBQ0UsVUFBSyxHQUFRLEVBQUUsQ0FBQztJQTZCbEIsQ0FBQztJQTNCQyxJQUFJLElBQUk7UUFDTixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN4QyxDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQU0sRUFBRSxLQUFRO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxNQUFNLENBQUMsR0FBTTtRQUNYLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29sbGVjdGlvbjxLLCBWPiB7XHJcbiAgaXRlbXM6IGFueSA9IHt9O1xyXG5cclxuICBnZXQgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaXRlbXMpLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHNldChrZXk6IEssIHZhbHVlOiBWKTogdm9pZCB7XHJcbiAgICB0aGlzLml0ZW1zW2tleV0gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldChrZXk6IEspOiBWIHtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zW2tleV07XHJcbiAgfVxyXG5cclxuICBoYXMoa2V5OiBLKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtc1trZXldICE9PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlKGtleTogSyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuaGFzKGtleSkpIHtcclxuICAgICAgZGVsZXRlIHRoaXMuaXRlbXNba2V5XTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMuaXRlbXMgPSB7fTtcclxuICB9XHJcbn1cclxuIl19