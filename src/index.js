import style from './index.css'
import { createStore } from 'redux'

var React = require('react')
var ReactDOM = require('react-dom')

import Ticker from './ticker'

const clickStart = () => {
  store.dispatch({
    type: 'STARTED',
    status: 'running'
  })
}

const storeManager = (state, action) => {
  if (action.type === 'STARTED') {
    return { status: 'running' }
  }
  return { status: 'stopped' }
}

let store = createStore(storeManager)

const render = () => {
  ReactDOM.render(
    <Ticker
      value={store.getState()}
      className={style.component}
      clickStart={clickStart}
    />,
    document.getElementById('tomuti')
  )
}

render()

store.subscribe(render)
