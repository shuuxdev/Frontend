import { Button } from 'primereact/button';
import React, { useEffect, useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { RouteComponentProps } from 'react-router-dom';
import BasicContainer from '../Components/BasicContainer';
import CartItem from '../Components/CartItem';
import Quantity from '../Components/Quantity';
import { Price } from '../Styles/Card';
import { ItemImage, Name } from '../Styles/CartItem';
import { Column, FlexboxColumn, FlexboxRow, MailBorder, Row } from '../Styles/Container';
import { Header } from '../Styles/Sidebar';
import IProduct, { ICartItem } from '../Types/IProduct';


interface ICheckout {
    list: Array<number>
}
const Checkout: React.FC<RouteComponentProps<{}, {}, ICheckout>> = (props) => {


    const [checkoutProduct, setCheckout] = useState<ICartItem[]>([]);
    useEffect(() => {

        fetch('/api/cart/checkout', { method: 'post', headers: new Headers({ 'content-type': 'application/json' }), body: JSON.stringify(props.location.state.list) })
            .then((res) => res.json())
            .then((data) => setCheckout(data))
    }, [])

    return (
        <BasicContainer >
            <FlexboxColumn >
                <MailBorder></MailBorder>
                <Row height="300px" margin="0px 0px 10px 0px" style={{ background: 'white' }}></Row>
                <Row height="300px" margin="0px 0px 10px 0px" style={{ background: 'white' }}></Row>
                <Row margin="0px 0px 10px 0px" style={{ background: 'white' }}>
                    <FlexboxColumn>
                        {checkoutProduct.map((item, index) => (
                            <CheckoutItem item={item} />
                        ))}
                    </FlexboxColumn>
                </Row>
            </FlexboxColumn>
        </BasicContainer>
    );
};

const CheckoutItem: React.FC<{ item: ICartItem }> = ({ item: { type, option, name, image, price, product_id: product_Id, quantity, cart_id } }) => {
    return (
        <FlexboxRow height="70px">
            <Column >
                <ItemImage size={70}>
                    <img src={image} alt="" />
                </ItemImage>
            </Column>
            <Column width="400px" margin="0px 10px 0px" centerY={true}>
                <Name>{name}</Name>
            </Column>
            <Column width="200px" centerY={true}>
                <Price>
                    {price}.000 vnđ
                </Price>
            </Column>
            <Column width="200px" centerX={true} centerY={true}>
                <span>{type}: {option}</span>
            </Column>
            <Column width="200px" centerX={true} centerY={true}>
                <span>Số lượng: {quantity}</span>
            </Column>
        </FlexboxRow>
    )
}
export default Checkout;