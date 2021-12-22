import { ItemImage, Name, Price } from "../Styles/CartItem";
import { Column, FlexboxColumn, FlexboxRow } from "../Styles/Container";
import Button from "./Button";
import { MdCancel } from 'react-icons/md'
import { Checkbox } from 'primereact/checkbox';
import { CartContext } from "../Contexts/CartProvider";
import { useContext, useEffect, useState } from "react";
import IProduct, { ICartItem } from "../Types/IProduct";
import Quantity from "./Quantity";
import { SelectListContext } from "../Pages/Cart";


const CartItem: React.FC<{ isSelected: boolean, item: ICartItem }> = ({ item: { name, image, price, product_id: product_Id, quantity, cart_id, type, option }, isSelected }) => {
    const { removeItemFromCart } = useContext(CartContext)


    const { setSelectList, setSelectProductList } = useContext(SelectListContext);

    const [select, setSelect] = useState(isSelected);

    useEffect(() => {
        setSelect(isSelected);
    }, [isSelected])
    useEffect(() => {
        if (select) {
            setSelectList((oldList) => {
                return [...oldList, cart_id]
            })
            setSelectProductList((oldList) => {
                return [...oldList, product_Id]

            })
        }
        else {
            setSelectList((oldList) => {
                const newList = oldList.filter(id => id !== cart_id);
                return newList;
            })
            setSelectProductList((oldList) => {
                const newList = oldList.filter(id => id !== product_Id);
                return newList;
            })
        }
    }, [select])



    return (

        <FlexboxRow height="100px">
            <Column width="50px" centerY={true} centerX={true}>
                <input type="checkbox" checked={select} onChange={() => setSelect(!select)}></input>
            </Column>
            <Column >
                <ItemImage size={100}>
                    <img src={image} alt="" />
                </ItemImage>
            </Column>
            <Column width="300px" margin="0px 10px 0px" centerY={true}>
                <Name>{name}</Name>
            </Column>
            <Column width="200px" margin="0px 10px 0px" centerY={true}>

                {type && option && <Name>{type}: {option}</Name>}
            </Column>
            <Column width="150px" centerY={true}>
                <Price>
                    {price}.000 vnđ
                </Price>
            </Column>
            <Column width="150px" centerX={true} centerY={true}>

                <Quantity quantity={quantity} cart_id={cart_id} />
            </Column>
            <Column centerY={true} flex={1}>
                <Button background="black" onClick={() => {
                    setSelectList((oldList) => {
                        const newList = oldList.filter(id => id !== cart_id);
                        return newList;
                    })
                    setSelectProductList((oldList) => {
                        const newList = oldList.filter(id => id !== product_Id);
                        return newList;
                    })
                        ; removeItemFromCart([cart_id])
                }}>
                    <MdCancel color="white"></MdCancel>
                </Button>
            </Column>
        </FlexboxRow>


    );
};
export default CartItem;

