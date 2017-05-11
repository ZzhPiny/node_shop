import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from '../containers/App'
import todoApp from './reducer'

let store = createStore(todoApp);

let rootElement = $('div')[0]

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
