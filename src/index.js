import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import tomutiApp from './reducers'
import App from './components/app'

let store = createStore(tomutiApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
