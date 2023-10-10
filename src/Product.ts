export class Product {
    constructor(public name: string, public price: number, public productCode: string) {
        if (name.trim() == '') {
            throw new Error("A név nem lehet üres");
        }
        else if (price < 100 || isNaN(price)) {
            throw new Error("Az ár nem lehet 100-nál kisebb.");
        }
        else if (productCode.length != 11) {
            throw new Error("A termék azonosítója 11 jegyűnek kell lennie");
        }
    }
}