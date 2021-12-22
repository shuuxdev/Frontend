
import React from "react";
import { Link } from "react-router-dom";
import { Sold } from "../Styles/Card";
import { ItemImage, Name, Price } from "../Styles/CartItem";
import { Column, FlexboxColumn, FlexboxRow, Row, Wrapper } from "../Styles/Container";
import { IMainProduct } from "../Types/IProduct";
const Product: React.FC<IMainProduct> = ({ image, name, price, product_Id, sold }) => {
    return (
        <Link to={`/product/${product_Id}`}>
            <FlexboxColumn height="100%" width="inherit">
                <ItemImage size={190}>
                    <img src={image} alt="" />
                </ItemImage>
                <Wrapper padding="10px">
                    <FlexboxColumn height="100%" width="100%">
                        <Row height="100px">
                            <Name>{name}</Name>
                        </Row>
                        <Row height="100%" position="relative">
                            <FlexboxRow height="20px" width="100%" position="absolute" bottom={0}>
                                <Column flex={1} centerY={true}>
                                    <Price>{price}</Price>
                                </Column>
                                <Column flex={1} centerY={true} justifyContent="flex-end">
                                    <Sold>Đã bán {sold}</Sold>
                                </Column>
                            </FlexboxRow>
                        </Row>
                    </FlexboxColumn>
                </Wrapper>
            </FlexboxColumn>
        </Link>
    )
}
export default Product;