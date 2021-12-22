import React, { useContext, useState } from "react";
import { BsBell, BsCartCheck, BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../Contexts/CartProvider";
import { GlobalContext } from "../Contexts/GlobalContext";
import Container from "../Styles/Container";
import { ISearchProduct } from "../Types/IProduct";
import SearchBar from "./SearchBar";

const Navbar: React.FC = () => {
    const { setLogin } = useContext(GlobalContext);



    return (
        <React.Fragment>
            <nav>
                <div className="container">
                    <div className="navbox">
                        <ul className="up">
                            <li className="contact">
                                <ul className="contactbox upbox">
                                    <li className="ct-facebook">
                                        <BsFacebook></BsFacebook>
                                        <span style={{ marginLeft: 5 }}>Facebook</span>
                                    </li>
                                    <li className="ct-zalo">
                                        <BsInstagram></BsInstagram>
                                        <span style={{ marginLeft: 5 }}>Instagram</span>

                                    </li>
                                </ul>
                            </li>
                            <li className="tool">
                                <ul className="toolbox upbox">
                                    <li className="notification">
                                        <a href="">
                                            <BsBell />
                                            <span>Thông báo</span>
                                        </a>

                                    </li>
                                    <li className="signin">
                                        <a href="#" onClick={() => setLogin(true)} >
                                            <span>Đăng nhập</span>
                                        </a>

                                    </li>
                                    <li className="signup">

                                        <a href="#" onClick={() => setLogin(true)} >
                                            <span>Đăng kí</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="down">
                            <li className="icon">
                                <Link to="/">
                                    <h1>SHOPINK</h1>
                                </Link>
                            </li>
                            <li className="searchbar">
                                <SearchBar></SearchBar>
                            </li>
                            <li className="cart">

                                <Link to="/cart">
                                    <BsCartCheck></BsCartCheck>
                                </Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="bottomnav">
                <Container mw="1200px">
                    <ul className="navbox2">
                        <li className="navlink">
                            <span>Link 1</span>
                        </li>
                        <li className="navlink">
                            <span>Link 1</span>
                        </li>

                        <li className="navlink">
                            <span>Link 1</span>
                        </li>
                        <li className="navlink">
                            <span>Link 1</span>
                        </li>

                    </ul>
                </Container>
            </div>
        </React.Fragment>
    )
}
export default Navbar;