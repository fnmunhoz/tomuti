import {
  START,
  UPDATE,
  PAUSE
} from '../constants/action-types'

const initMinutes = 25
const initSeconds = 0

const initialState = {
  initMinutes: initMinutes,
  initSeconds: initSeconds,
  durationMinutes: initMinutes,
  durationSeconds: initSeconds,
  count: 0,
  startedAt: undefined,
  currentMinutes: initMinutes,
  currentSeconds: initSeconds,
  paused: false
}

export default (state = initialState, action) => {
  const timeLeftValue = timeLeft(state, action.currentTime)
  const currentDate = new Date(timeLeftValue)

  switch (action.type) {
    case START:
      return {
        ...state,
        startedAt: state.startedAt || state.paused ? undefined : action.currentTime,
        currentMinutes: state.initMinutes,
        currentSeconds: state.initSeconds,
        durationMinutes: state.initMinutes,
        durationSeconds: state.initSeconds,
        paused: false
      }
    case UPDATE:
      if (timeLeftValue < 0) {
        return {
          ...state,
          startedAt: undefined,
          count: state.count + 1
        }
      } else {
        return {
          ...state,
          currentMinutes: currentDate.getMinutes(),
          currentSeconds: currentDate.getSeconds()
        }
      }
    case PAUSE:
      var pauseState
      if (state.paused) {
        pauseState = {
          ...state,
          startedAt: action.currentTime,
          currentMinutes: state.durationMinutes,
          currentSeconds: state.durationSeconds,
          paused: false
        }
      } else {
        pauseState = {
          ...state,
          startedAt: undefined,
          durationMinutes: currentDate.getMinutes(),
          durationSeconds: currentDate.getSeconds(),
          paused: true
        }
      }

      return pauseState

    default:
      return state
  }
}

const timeLeft = (localState, currentTime) => {
  const timeElapsedInMiliSeconds = currentTime - localState.startedAt

  return durationInMiliSeconds(localState) - timeElapsedInMiliSeconds
}

const durationInMiliSeconds = (localState) => {
  const minutesInSeconds = localState.durationMinutes * 60
  const seconds = minutesInSeconds + localState.durationSeconds

  return seconds * 1000
}
