import style from './index.css'
import { createStore } from 'redux'

var React = require('react')
var ReactDOM = require('react-dom')

import Ticker from './ticker'

const storeManager = (state, action) => {
  return state
}

let store = createStore(storeManager)

const render = () => {
  ReactDOM.render(
    <Ticker value={store.getState()} className={style.component} />,
    document.getElementById('tomuti')
  )
}

render()

store.subscribe(render)
