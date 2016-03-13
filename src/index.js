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
  quantity: 0
}

const timeElapsed = (durationMinutes, durationSeconds) => {
  return ((durationMinutes * 60) + durationSeconds) * 1000 - (Date.now() - store.getState().startedAt)
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
        startedAt: undefined,
        quantity: state.quantity
      }
    case 'stopped':
      return {
        status: 'running',
        tick: 0,
        startedAt: Date.now(),
        quantity: state.quantity
      }
  }
}

const tickManager = (state) => {
  let quantity = state.quantity
  let status = state.status
  let startedAt = state.startedAt

  if (timeElapsed(0, 5) < 0) {
    quantity += 1
    status = 'stopped'
    startedAt = undefined
  }

  switch (state.status) {
    case 'running':
      return {
        status: status,
        tick: state.tick + 1,
        startedAt: startedAt,
        quantity: quantity
      }
    case 'stopped':
      return {
        status: status,
        tick: 0,
        startedAt: startedAt,
        quantity: quantity
      }
  }
}

let store = createStore(storeManager)

const render = () => {
  ReactDOM.render(
    <div>
      <ReactInterval timeout={100} enabled callback={tick} />
      <Timer
        durationMinutes={0}
        durationSeconds={5}
        timeElapsed={timeElapsed(0, 5)}
        status={store.getState().status}
        startedAt={store.getState().startedAt}
        startToggle={startToggle}
      />
      <p>{store.getState().quantity}</p>
    </div>,
    document.getElementById('tomuti')
  )
}

render()

store.subscribe(render)
