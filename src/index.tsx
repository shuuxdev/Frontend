import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './Styles/GlobalStyles'
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DanhMucSanPham from './Pages/DanhMucSanPham';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './Reducers/allReducer';
import EmptyPage from './Pages/EmptyPage';


const store = createStore(allReducers);
const App: React.FC = () => {
    return (
        <Router>
            <GlobalStyles />
            <Sidebar></Sidebar>
            <Switch>
                <Route exact path="/" component={DanhMucSanPham}></Route>
                <Route exact path="/danh-muc" component={DanhMucSanPham}></Route>
                <Route exact path="/trang-chu" component={DanhMucSanPham}></Route>
                <Route exact path="/danh-muc/ban-hang" component={DanhMucSanPham}></Route>
                <Route exact path="/emptyPage" component={EmptyPage}></Route>
            </Switch>
        </Router>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);