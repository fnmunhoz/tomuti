import {
  START,
  UPDATE
} from '../constants/action-types'

const initialState = {
  durationMinutes: 25,
  durationSeconds: 0,
  count: 0,
  currentTime: undefined,
  startedAt: undefined
}

const currentPomodoro = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        startedAt: state.startedAt ? undefined : action.currentTime,
        currentTime: action.currentTime
      }
    case UPDATE:
      let timeLeftValue = timeLeft(state)

      if (timeLeftValue && timeLeftValue < 0) {
        return {
          ...state,
          startedAt: undefined,
          count: state.count + 1,
          currentTime: action.currentTime
        }
      } else {
        return {
          ...state,
          currentTime: action.currentTime
        }
      }

      break

    default:
      return state
  }
}

export default currentPomodoro

export const timeLeft = (localState) => {
  if (localState.startedAt) {
    let minutesInSeconds = localState.durationMinutes * 60
    let seconds = localState.durationSeconds
    let durationInMiliSeconds = (minutesInSeconds + seconds) * 1000
    let timeElapsedInMiliSeconds = localState.currentTime - localState.startedAt

    return durationInMiliSeconds - timeElapsedInMiliSeconds
  }
}

