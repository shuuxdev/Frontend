
interface IProduct {
    name: string,
    image: string,
    price: number;
    product_id: number;
    quantity: number;
    cart_id: number;

}
export interface ProductType {
    type: string;
    type_id: number;
    options: [
        { name: string }
    ]
}
export interface IProductDetail {
    product_id: number;
    name: string;
    price: number;
    quantity: number;
    sold: number;
    image: string;
    types: ProductType[];
}

export interface IMainProduct {
    name: string,
    image: string,
    price: number;
    sold: number;
    product_Id: number;

}
export interface ISearchProduct {
    name: string,
    image: string,
    price: number;
    product_id: number;
}
export interface ICartItem {
    name: string,
    image: string,
    price: number;
    product_id: number;
    quantity: number;
    cart_id: number;
    type: string;
    option: string;
}
export default IProduct