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
