import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import React from "react";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { Price } from "../Styles/Card";
import { ItemImage, Name } from "../Styles/CartItem";
import { Column, FlexboxColumn, FlexboxRow, Row, Search } from "../Styles/Container";
import { ISearchProduct } from "../Types/IProduct";
import Quantity from "./Quantity";

const SearchBar: React.FC = () => {



    const [searchResult, setSearchResult] = useState<ISearchProduct[]>([]);

    const searchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value)
            fetch(`/api/product/search?keyword=${e.target.value}`).then(res => res.json()).then(data => setSearchResult(data));

        else {
            setSearchResult([]);
        }
    }
    return (
        <React.Fragment>
            <Search onChange={(e) => searchInput(e)}></Search>
            <FlexboxColumn position="absolute" top={100} zIndex={4} width="100%">
                {
                    searchResult.map(item => (
                        <Link to={`/product/${item.product_id}`}>
                            <Row height="50px" style={{ background: "red" }}>
                                <FlexboxRow height="50px">
                                    <Column >
                                        <ItemImage size={50}>
                                            <img src={item.image} alt="" />
                                        </ItemImage>
                                    </Column>
                                    <Column width="400px" margin="0px 10px 0px" centerY={true}>
                                        <Name style={{ color: 'black', fontSize: "13px" }}>{item.name}</Name>
                                    </Column>
                                    <Column width="200px" centerY={true} flex={1}>
                                        <Price style={{ color: 'black' }} >
                                            {item.price}.000 vnđ
                                        </Price>
                                    </Column>

                                </FlexboxRow>
                            </Row>
                        </Link>
                    ))
                }
            </FlexboxColumn>
        </React.Fragment>
    );
};

export default SearchBar;