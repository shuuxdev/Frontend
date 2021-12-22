import React, { useContext, useEffect, useState } from 'react';
import IProduct, { IMainProduct } from '../Types/IProduct';

interface IProductContext {
    products: IMainProduct[],

}
const defaultValue: IProductContext = {
    products: [],
}
export const ProductContext = React.createContext<IProductContext>(defaultValue);

const ProductProvider: React.FC = ({ children }) => {
    const [products, setProducts] = useState<IMainProduct[]>([]);


    useEffect(() => {
        fetch("/api/product?pageindex=400&pagesize=36").then(res => res.json()).then(data => setProducts(data))
    }, [])

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;