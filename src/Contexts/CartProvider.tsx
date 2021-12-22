import React, { ReactFragment, useContext, useEffect, useState } from "react";
import IProduct, { ICartItem } from "../Types/IProduct";


interface ProductType {
    type_id: number,
    option_id: number
}

interface ICartContext {
    updateCart: () => void;
    cart: ICartItem[],
    removeItemFromCart: (id: Array<number>) => void,
    addProductToCart: (id: number, options?: ProductType) => void,
    updateItemQuantity: (id: number, quantity: number) => void,
    totalPrice: (selectList: Array<number>) => number,
    addProductToCartWithoutOption: (id: number) => void
}
const defaultValue: ICartContext = {
    updateCart: function (): void {
        throw new Error("Function not implemented.");
    },
    cart: [],
    removeItemFromCart: function (id: Array<number>): void {
        throw new Error("Function not implemented.");
    },
    addProductToCart: function (id: number, options?: ProductType): void {
        throw new Error("Function not implemented.");
    },
    updateItemQuantity: function (id: number, quanity: number): void {
        throw new Error("Function not implemented.");
    },
    totalPrice: function (selectList: number[]): number {
        throw new Error("Function not implemented.");
    },
    addProductToCartWithoutOption: function (id: number) {
        throw new Error("Function not implemented.");
    }
}
export const CartContext = React.createContext<ICartContext>(defaultValue);

const CartProvider: React.FC = ({ children }) => {



    const [update, setUpdate] = useState(false);
    const [cart, setCart] = useState<ICartItem[]>([])

    useEffect(() => {
        fetch("/api/cart", { method: "get", credentials: "include" }).then(res => res.json()).then(data => setCart(data));
    }, [update])


    const updateCart = () => {
        setUpdate(!update);
    }

    const addProductToCart = (id: number, option?: ProductType) => {
        console.log("id", id)
        console.log("option", option)
        if (id && option) {
            fetch(`/api/cart/cartwithtype`,
                {
                    method: 'post', credentials: 'include', headers: new Headers({ 'content-type': 'application/json' })
                    , body: JSON.stringify({ product_id: id, option_id: option?.option_id, type_id: option?.type_id })
                })
        }
        updateCart();
    }

    const addProductToCartWithoutOption = (id: number) => {
        if (id) {
            fetch(`/api/cart?productid=${id}`, { method: 'post', credentials: 'include' })
        }
        updateCart();

    }
    const totalPrice = (selectList: Array<number>) => {
        const matchProduct = cart.filter(item => selectList.includes(item.product_id));

        var sum = 0;
        matchProduct.forEach(product => {
            sum += product.price;
        })
        return sum;
    }

    const removeItemFromCart = (id: Array<number>) => {
        if (id) {
            var response = fetch("/api/cart", { method: "delete", credentials: "include", body: JSON.stringify(id), headers: new Headers({ 'content-type': 'application/json' }) })
            updateCart();


        }
    }
    const updateItemQuantity = (id: number, quantity: number) => {
        console.log('triggered' + id + ' ' + quantity)
        if (id) {
            fetch("/api/cart/quantity", { method: "post", credentials: "include", body: JSON.stringify({ quantity, cart_id: id }), headers: new Headers({ 'content-type': 'application/json' }) })
            updateCart();
        }

    }
    const ProviderValue = {
        updateCart: updateCart,
        cart: cart,
        removeItemFromCart: removeItemFromCart,
        addProductToCart: addProductToCart,
        updateItemQuantity: updateItemQuantity,
        totalPrice,
        addProductToCartWithoutOption
    }
    return (
        <CartContext.Provider value={ProviderValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;