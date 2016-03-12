import style from './index.css'
import { createStore } from 'redux'

var React = require('react')
var ReactDOM = require('react-dom')

import Ticker from './Ticker'

const startToggle = () => {
  store.dispatch({
    type: 'START_TOGGLE',
    status: 'running'
  })
}

const storeManager = (state, action) => {
  if (action.type === 'START_TOGGLE') {
    if (state.status === 'running') {
      return { status: 'stopped' }
    } else if (state.status === 'stopped') {
      return { status: 'running' }
    }

  }
  return { status: 'stopped' }
}

let store = createStore(storeManager)

const render = () => {
  ReactDOM.render(
    <Ticker
      value={store.getState()}
      className={style.component}
      startToggle={startToggle}
    />,
    document.getElementById('tomuti')
  )
}

render()

store.subscribe(render)
