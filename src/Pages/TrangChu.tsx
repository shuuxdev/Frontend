import React, { useContext } from 'react';
import '../SCSS/TrangChu.scss';
import Container, { Wrapper } from '../Styles/Container';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import Shirt from '../Images/shirt.png'
import { Price, ProductTitle, Sold } from '../Styles/Card';
import Navbar from '../Components/Navbar';
import Product from '../Components/Product';
import { ProductContext } from '../Contexts/ProductProvider';
const TrangChu = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Slide />
            <Category />
            <Main />
        </React.Fragment>
    );
};
const Main: React.FC = () => {
    const { products } = useContext(ProductContext);
    return (
        <section className="main-section">
            <Container mw="1200px">
                <div className="product-view">
                    <div className="product-main-header">
                        <h4>Gợi ý hôm nay</h4>
                    </div>
                    <ul className="product-list">
                        {products.map((item, index) => (
                            <Product sold={item.sold} key={index} name={item.name} image={item.image} price={item.price} product_Id={item.product_Id}></Product>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    )
}
const Category: React.FC = () => {
    return (
        <section className="category-section">
            <Container mw="1200px">
                <div className="category-header">
                    <h3>Danh mục</h3>
                </div>
                <div className="category-box">
                    <ul className="category-list">
                        {Array(18).fill(null).map(key => (
                            <li className="category-item">
                                <div className="cgr-img">
                                    <img src={Shirt} alt="" className="category-img" />
                                </div>

                                <span>Quần áo</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    )
}
const Slide: React.FC = () => {
    return (
        <div className="slide-section">
            <Container mw="1200px">
                <div className="ms-section">
                    <ul className="index-list">
                        <li className="index-item">
                            <span>Item 1</span>
                        </li>
                        <li className="index-item">
                            <span>Item 1</span>

                        </li>
                        <li className="index-item">
                            <span>Item 1</span>

                        </li>
                        <li className="index-item">
                            <span>Item 1</span>

                        </li>
                        <li className="index-item">
                            <span>Item 1</span>

                        </li>
                        <li className="index-item">
                            <span>Item 1</span>

                        </li>
                    </ul>
                    <div className="block">
                        <Splide options={
                            { perPage: 1, height: 500 }
                        }>
                            <SplideSlide>
                                <div style={{ height: 500, background: "white" }}></div>
                            </SplideSlide>
                            <SplideSlide>
                                <div style={{ height: 500, background: "white" }}></div>
                            </SplideSlide>
                            <SplideSlide>
                                <div style={{ height: 500, background: "white" }}></div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TrangChu;