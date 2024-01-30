export class CartItem {
    private _productID: string;
    private _name: string;
    private _price: number;

    constructor(_productID: string, _name: string, _price: number) {
        this._productID = _productID;
        this._name = _name;
        this._price = _price;
    }

    public getPrice(){
        return this._price
    }
}