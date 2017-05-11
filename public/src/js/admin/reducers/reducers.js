import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import nav from './nav';
import product from './product';
import user from './user';

var reducers = combineReducers({
    nav: nav,
    product: product,
    user: user,
    routing: routerReducer
})

export default reducers;