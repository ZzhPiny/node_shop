import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import reducers from '../reducers/reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

// const loggerMiddlerware = createLogger();

export default function configureStore(preloadedState) {
    preloadedState = preloadedState || {}
    return createStore(
        reducers,
        preloadedState,
        composeWithDevTools(applyMiddleware(
                thunkMiddleware,
                logger
            )
        )
    )
}