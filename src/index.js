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
  startedAt: undefined,
  quantity: 0,
  durationMinutes: 0,
  durationSeconds: 3
}

const timeElapsed = () => {
  return ((store.getState().durationMinutes * 60) + store.getState().durationSeconds) * 1000 - (Date.now() - store.getState().startedAt)
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
        ...state,
        status: 'stopped',
        startedAt: undefined
      }
    case 'stopped':
      return {
        ...state,
        status: 'running',
        startedAt: Date.now()
      }

    default:
      return state
  }
}

const tickManager = (state) => {
  let status = state.status
  let tick = state.tick
  let quantity = state.quantity
  let startedAt = state.startedAt

  if (timeElapsed() < 0) {
    status = 'stopped'
    tick += 1
    quantity += 1
    startedAt = undefined
  }

  switch (state.status) {
    case 'running':
      return {
        ...state,
        status: status,
        tick: tick,
        quantity: quantity,
        startedAt: startedAt
      }

    default:
      return state
  }
}

let store = createStore(storeManager)

const render = () => {
  ReactDOM.render(
    <div>
      <ReactInterval timeout={100} enabled callback={tick} />
      <Timer
        durationMinutes={store.getState().durationMinutes}
        durationSeconds={store.getState().durationSeconds}
        timeElapsed={timeElapsed()}
        status={store.getState().status}
        startToggle={startToggle}
        quantity={store.getState().quantity}
      />
    </div>,
    document.getElementById('tomuti')
  )
}

render()

store.subscribe(render)
