import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './Styles/GlobalStyles'
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DanhMucSanPham from './Pages/DanhMucSanPham';
import EmptyPage from './Pages/EmptyPage';
import TrangChu from './Pages/TrangChu';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import CartProvider from './Contexts/CartProvider';
import Authentication from './Pages/Authentication';
import ProductProvider from './Contexts/ProductProvider';
import GlobalProvider from './Contexts/GlobalContext';
import Checkout from './Pages/Checkout';


const App: React.FC = () => {
    return (
        <Router>
            <GlobalStyles />
            <GlobalProvider>
                <Switch>
                    <Route exact path="/danh-muc" component={DanhMucSanPham}></Route>
                    <Route exact path="/trang-chu" component={DanhMucSanPham}></Route>
                    <Route exact path="/danh-muc/ban-hang" component={DanhMucSanPham}></Route>
                    <Route exact path="/emptyPage" component={EmptyPage}></Route>
                </Switch>

                <Switch>
                    <ProductProvider>
                        <Route exact path="/" component={TrangChu}></Route>
                        <CartProvider>
                            <Route exact path="/product/:id" component={Product}></Route>
                            <Authentication />
                            <Route exact path="/cart" component={Cart}></Route>
                            <Route exact path="/checkout" component={Checkout}></Route>
                        </CartProvider>
                    </ProductProvider>

                </Switch>
            </GlobalProvider>
        </Router>
    );
};
ReactDOM.render(
    <App />,
    document.getElementById('root')
);