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

const tick = () => {
  store.dispatch({
    type: 'TICK'
  })
}

const initialState = {
  status: 'stopped',
  tick: 0
}

const startToggleManager = (state) => {
  switch (state.status) {
    case 'running':
      return {
        status: 'stopped',
        tick: 0
      }
    case 'stopped':
      return {
        status: 'running',
        tick: 0
      }
  }
}

const tickManager = (state) => {
switch (state.status) {
    case 'running':
      return {
        status: state.status,
        tick: state.tick + 1
      }
    case 'stopped':
      return {
        status: state.status,
        tick: 0
      }
  }
}

const storeManager = (state = initialState, action) => {
  switch (action.type) {
    case 'START_TOGGLE':
      return startToggleManager(state)
    case 'TICK':
      return tickManager(state)

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
      tick={tick}
    />,
    document.getElementById('tomuti')
  )
}

render()

store.subscribe(render)
