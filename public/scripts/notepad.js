export class Notepad {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getProductDescription() {
        return `Notepad "${this.name}"`;
    }
}
