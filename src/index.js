import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import ReactInterval from 'react-interval'
import Timer from './components/timer'

import { startToggleAction } from './actions'
import { tickAction } from './actions'

const startToggle = () => {
  store.dispatch(startToggleAction())
}

const tick = () => {
  store.dispatch(tickAction())
}

const timeCountdown = () => {
  let minutesInSeconds = store.getState().durationMinutes * 60
  let seconds = store.getState().durationSeconds
  let durationInMiliSeconds = (minutesInSeconds + seconds) * 1000
  let timeElapsedInMiliSeconds = Date.now() - store.getState().startedAt

  return durationInMiliSeconds - timeElapsedInMiliSeconds
}

const currentTime = () => {
  let m, s, time

  if (store.getState().status === 'running') {
    time = new Date(timeCountdown())
    m = time.getMinutes()
    s = time.getSeconds()
  } else {
    m = store.getState().durationMinutes
    s = store.getState().durationSeconds
  }

  return { minutes: m, seconds: s }
}

const timeFinished = () => {
  return timeCountdown() < 0
}

const initialState = {
  status: 'stopped',
  tick: 0,
  startedAt: undefined,
  quantity: 0,
  durationMinutes: 0,
  durationSeconds: 3
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

  if (timeFinished()) {
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
  let { minutes, seconds } = currentTime()

  ReactDOM.render(
    <div>
      <ReactInterval timeout={100} enabled callback={tick} />
      <Timer
        currentMinutes={minutes}
        currentSeconds={seconds}
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
