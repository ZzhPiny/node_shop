/*
    create by Piny
 */
import React from 'react';
import ReactDOM from 'react-dom';

// import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { Router, IndexRoute, Route, Link, browserHistory, Redirect} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'antd/dist/antd.css';

// redux store
import configureStore from './redux/config_store';

// 路由组件
import App from './components/app';
import Dashboard from './components/dashboard';

// Page Setting 页面设置
import PageSetting from './components/pagesetting/index';
import PageFullStation from './components/pagesetting/fullstation';
import PageHome from './components/pagesetting/home';
import PageCompany from './components/pagesetting/company';
import PageProduction from './components/pagesetting/production';
import PageNews from './components/pagesetting/news';
import PageService from './components/pagesetting/service';
import PageContact from './components/pagesetting/contact';

// Product 类
import Product from './components/product/product';

import Classify from './components/product/classify';
import List from './components/product/list';
import AddProduct from './components/product/addproduct';

// User 类
import User from './components/user';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store)

console.log(store);

ReactDOM.render((
    <Provider store={store}>
        <Router history={ history }>
            <Route path='/admin' component={ App } >
                <IndexRoute component={ Dashboard } />

                <Route path='pagesetting' component={ PageSetting } >
                    <IndexRoute component={ PageFullStation } />

                    <Route path='fullstation' component={ PageFullStation } />
                    <Route path='home' component={ PageHome } />
                    <Route path='company' component={ PageCompany } />
                    <Route path='production' component={ PageProduction } />
                    <Route path='news' component={ PageNews } />
                    <Route path='service' component={ PageService } />
                    <Route path='contact' component={ PageContact } />
                    
                    <Redirect from='*' to='/admin/pagesetting' />
                </Route>
                
                <Route path='production' component={ Product } >
                    <Route path='classify' component={ Classify } />
                    <Route path='list' component={ List } />
                    <Route path='addproduct' component={ AddProduct } />
                    <Redirect from='*' to='/admin' />
                </Route>
                
                <Route path='user' component={ User } />
                
                <Route path='*' component={ Dashboard } />
            </Route>
            <Redirect from='*' to='/admin' />
        </Router>
    </Provider>
), document.getElementById('main'));