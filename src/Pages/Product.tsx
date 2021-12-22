import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Container, { Column, FlexboxRow, Row, Wrapper } from "../Styles/Container";
import '../SCSS/Product.scss'
import Image from '../Images/shirt.png'

import { BsCart, BsCartCheck } from "react-icons/bs";
import IProduct, { IProductDetail } from "../Types/IProduct";
import { RouteComponentProps } from "react-router-dom";
import { HeaderText, ItemImage, Name, Price } from "../Styles/CartItem";
import BasicContainer from "../Components/BasicContainer";
import { Sold } from "../Styles/Card";
import Button from "../Components/Button";
import { CartContext } from "../Contexts/CartProvider";
import '../SCSS/ProductPage.scss'
import types from "@splidejs/splide";
interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {

}
const Product: React.FC<Props & IProductDetail> = (props) => {

    const defaultProduct: IProductDetail = {
        name: "",
        image: "",
        price: 0,
        product_id: 0,
        quantity: 0,
        sold: 0,
        types: []
    }
    const [product, setProduct] = useState<IProductDetail>(defaultProduct);
    const { image, name, price, product_id, quantity, sold } = product;

    const { addProductToCart,addProductToCartWithoutOption } = useContext(CartContext);

    const [selectedType, setSelectedType] = useState<any>();
    useEffect(() => {
        fetch(`/api/product/item?itemid=${props.match.params.id}`).then(res => res.json()).then(data => setProduct(data))
    }, [])
    useEffect(() => {
        console.log(selectedType);
    }, [selectedType])

    return (
        <React.Fragment>
            <Navbar />
            <BasicContainer>
                <FlexboxRow height="500px">
                    <Column width="400px">
                        <ItemImage size={400}>
                            <img src={image} alt="" />
                        </ItemImage>
                    </Column>
                    <Column flex={1} position="relative">
                        <Wrapper margin="10px">
                            <HeaderText>
                                {name}
                            </HeaderText>
                            <div className="sell-section">
                                <div className="review">
                                    <p>Số lượng: {quantity}</p>
                                </div>
                                <div className="divide"></div>
                                <div className="sold">
                                    <p>Đã bán: {sold}</p>
                                </div>
                            </div>
                            <div className="price-section">
                                <h2>{price * 1000} vnđ</h2>
                            </div>
                            {product.types.map(type => (
                                <div className="type-section">
                                    <div className="type-title">
                                        <p>{type.type}:</p>
                                    </div>
                                    <div className="type-container">
                                        {type.options.map((opt: any) => (
                                            <button className="type-btn" type="submit" onClick={() => setSelectedType({ type_id: type.type_id, option_id: opt.option_id })}>
                                                <p>{opt.option}</p>
                                            </button>
                                        ))}

                                    </div>

                                </div>
                            ))
                            }
                            <Row position="absolute" bottom={30} left={30} centerY={true}>
                                <Column margin="10px">
                                    {product.types.length > 0 &&
                                        <Button border="1px solid #544fe8" borderRadius="2px" width="140px" onClick={() => addProductToCart(product_id, selectedType)}>
                                            <BsCartCheck fontSize="30px" color="#eeedfa">
                                            </BsCartCheck>
                                            <span style={{ color: "#4e48e0", marginLeft: "10px" }}>Lưu vào giỏ</span>
                                        </Button>
                                    }
                                    {
                                        product.types.length == 0 &&
                                        <Button border="1px solid #544fe8" borderRadius="2px" width="140px" onClick={() => addProductToCartWithoutOption(product_id)}>
                                            <BsCartCheck fontSize="30px" color="#eeedfa">
                                            </BsCartCheck>
                                            <span style={{ color: "#4e48e0", marginLeft: "10px" }}>Lưu vào giỏ</span>
                                        </Button>
                                    }
                                </Column>
                                <Column margin="10px">

                                    <Button border="1px solid #544fe8" borderRadius="2px" background="#544fe8" width="140px" onClick={() => addProductToCart(product_id, selectedType)}>

                                        <span style={{ color: 'white' }}>Lưu vào giỏ</span>
                                    </Button>
                                </Column>
                            </Row>
                        </Wrapper>
                    </Column>
                </FlexboxRow>
            </BasicContainer>

        </React.Fragment>
    );
};

export default Product;