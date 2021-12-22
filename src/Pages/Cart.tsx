import { Checkbox } from "primereact/checkbox";
import React, { SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { MutableRefObject } from "react";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import BasicContainer from "../Components/BasicContainer";
import Button from "../Components/Button";
import CartItem from "../Components/CartItem";
import Navbar from "../Components/Navbar";
import Quantity from "../Components/Quantity";
import { CartContext } from "../Contexts/CartProvider";
import { GlobalContext } from "../Contexts/GlobalContext";
import { Price } from "../Styles/Card";
import { Column, FlexboxColumn, FlexboxRow, Wrapper } from "../Styles/Container";

interface ISelectList {
    setSelectList: React.Dispatch<React.SetStateAction<Array<number>>>,
    setSelectProductList: React.Dispatch<React.SetStateAction<Array<number>>>

};

const defaultValue: ISelectList = {
    setSelectList: function (value: SetStateAction<Array<number>>): void {
        throw new Error("Function not implemented.");
    },
    setSelectProductList: function (value: SetStateAction<number[]>): void {
        throw new Error("Function not implemented.");
    }
}
export const SelectListContext = React.createContext(defaultValue);


const Cart = () => {

    const { cart, totalPrice, removeItemFromCart } = useContext(CartContext);

    const [selectAll, setSelectAll] = useState(false);

    const [selectList, setSelectList] = useState<Array<number>>([]);

    const [selectProductList, setSelectProductList] = useState<Array<number>>([]);

    const checkAll = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

    useEffect(() => {
        console.log('out', selectList);
        if (selectList.length != cart.length)
            checkAll.current.checked = false
        else {
            setSelectAll(true)
        }
    }, [selectList])
    return (
        <React.Fragment>
            <Navbar />
            <BasicContainer>
                <FlexboxColumn>
                    <FlexboxRow height="50px">
                        <Column width="100px">
                            <input type="checkbox" checked={selectAll} ref={checkAll} onChange={() => { setSelectAll(!selectAll) }} />
                        </Column>
                        <Column width="475px">
                            <p>Sản phẩm</p>
                        </Column>
                        <Column width="200px">
                            <p>Phân loại</p>
                        </Column>
                        <Column width="200px">
                            <p>Đơn giá</p>
                        </Column>

                        <Column width="100px" >
                            <p>Thao tác</p>
                        </Column>
                        {selectList.length > 0 &&
                            <Column centerY={true} flex={1}>
                                <Button background="red" onClick={() => removeItemFromCart(selectList)}>
                                    <MdCancel color="white"></MdCancel>
                                </Button>
                            </Column>
                        }
                    </FlexboxRow>
                    <SelectListContext.Provider value={{ setSelectList, setSelectProductList }}>
                        {cart.map((item) => (
                            <CartItem key={item.cart_id} item={item} isSelected={selectAll} />
                        ))}
                    </SelectListContext.Provider>

                </FlexboxColumn>
                <FlexboxRow style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} height="100px" position="fixed" left={0} right={0} bottom={0} zIndex={11}  >
                    <BasicContainer>
                        <FlexboxRow height="100px" width="100%">
                            <Column width="300px">
                                <span>
                                    Tổng thanh toán ({selectProductList.length} sản phẩm):
                                </span>
                            </Column>
                            <Column width="200px">
                                <Price style={{ fontSize: "18px" }}>
                                    {totalPrice(selectProductList)}.000 vnđ
                                </Price>
                            </Column>
                            <Column flex={1}>
                                <Link to={{
                                    pathname: '/checkout',
                                    state: {
                                        list: selectList
                                    }
                                }}>
                                    <Button border="1px solid #44fe8" borderRadius="2px" width="140px">

                                        <span style={{ color: "#4e48e0", marginLeft: "10px" }}>Thanh toán</span>
                                    </Button>
                                </Link>

                            </Column>
                        </FlexboxRow>
                    </BasicContainer>
                </FlexboxRow>
            </BasicContainer >

        </React.Fragment >
    );
};

export default Cart;