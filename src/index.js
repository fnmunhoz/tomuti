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
        status: 'stopped',
        tick: 0,
        startedAt: undefined,
        quantity: state.quantity,
        durationMinutes: state.durationMinutes,
        durationSeconds: state.durationSeconds
      }
    case 'stopped':
      return {
        status: 'running',
        tick: 0,
        startedAt: Date.now(),
        quantity: state.quantity,
        durationMinutes: state.durationMinutes,
        durationSeconds: state.durationSeconds
      }
  }
}

const tickManager = (state) => {
  let quantity = state.quantity
  let status = state.status
  let startedAt = state.startedAt

  if (timeElapsed() < 0) {
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
        quantity: quantity,
        durationMinutes: state.durationMinutes,
        durationSeconds: state.durationSeconds
      }
    case 'stopped':
      return {
        status: status,
        tick: 0,
        startedAt: startedAt,
        quantity: quantity,
        durationMinutes: state.durationMinutes,
        durationSeconds: state.durationSeconds
      }
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
