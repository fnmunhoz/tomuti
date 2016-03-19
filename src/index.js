import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import tomutiApp from './reducers'
import App from './components/app'

const middleware = process.env.NODE_ENV === 'production' ? [ thunk ] : [ thunk, logger() ]

const store = createStore(
  tomutiApp,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
