import style from './index.css'
import { createStore } from 'redux'
import ReactInterval from 'react-interval'
import Timer from './components/timer'

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
  tick: 0,
  startedAt: undefined
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

const startToggleManager = (state) => {
  switch (state.status) {
    case 'running':
      return {
        status: 'stopped',
        tick: 0,
        startedAt: undefined
      }
    case 'stopped':
      return {
        status: 'running',
        tick: 0,
        startedAt: Date.now()
      }
  }
}

const tickManager = (state) => {
  switch (state.status) {
    case 'running':
      return {
        status: state.status,
        tick: state.tick + 1,
        startedAt: state.startedAt
      }
    case 'stopped':
      return {
        status: state.status,
        tick: 0,
        startedAt: state.startedAt
      }
  }
}

let store = createStore(storeManager)

const render = () => {
  ReactDOM.render(
    <div>
      <ReactInterval timeout={100} enabled callback={tick} />
      <Timer
        duration={25}
        status={store.getState().status}
        startedAt={store.getState().startedAt}
        className={style.component}
        startToggle={startToggle}
      />
    </div>,
    document.getElementById('tomuti')
  )
}

render()

store.subscribe(render)
