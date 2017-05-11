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
                <Route path='product' component={ Product } >
                    <Route path='classify' component={ Classify } />
                    <Route path='list' component={ List } />
                    <Route path='addproduct' component={ AddProduct } />
                    <Redirect from='*' to='/admin/product' />
                </Route>
                <Route path='user' component={ User } />
                <Route path='*' component={ Dashboard } />
            </Route>
            <Redirect from='*' to='/admin' />
        </Router>
    </Provider>
), $("body")[0]);