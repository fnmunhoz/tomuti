import style from './index.css'
import { createStore } from 'redux'
import Ticker from './Ticker'

var React = require('react')
var ReactDOM = require('react-dom')

const startToggle = () => {
  store.dispatch({
    type: 'START_TOGGLE'
  })
}

const initialState = {
  status: 'stopped'
}

const startToggleManager = (state) => {
  switch (state.status) {
    case 'running':
      return {
        status: 'stopped'
      }
    case 'stopped':
      return {
        status: 'running'
      }
  }
}

const storeManager = (state = initialState, action) => {
  switch (action.type) {
    case 'START_TOGGLE':
      return startToggleManager(state)

    default:
      return state
  }
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
