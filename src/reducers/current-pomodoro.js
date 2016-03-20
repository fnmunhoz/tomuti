import {
  START,
  UPDATE
} from '../constants/action-types'

const initialState = {
  durationMinutes: 25,
  durationSeconds: 0,
  count: 0,
  startedAt: undefined,
  timeLeft: undefined
}

const currentPomodoro = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        startedAt: state.startedAt ? undefined : action.currentTime
      }
    case UPDATE:
      const timeLeftValue = timeLeft(state, action.currentTime)

      if (timeLeftValue && timeLeftValue < 0) {
        return {
          ...state,
          startedAt: undefined,
          timeLeft: undefined,
          count: state.count + 1
        }
      } else {
        return {
          ...state,
          timeLeft: timeLeftValue
        }
      }

      break

    default:
      return state
  }
}

export default currentPomodoro

const timeLeft = (localState, currentTime) => {
  if (localState.startedAt) {
    let minutesInSeconds = localState.durationMinutes * 60
    let seconds = localState.durationSeconds
    let durationInMiliSeconds = (minutesInSeconds + seconds) * 1000
    let timeElapsedInMiliSeconds = currentTime - localState.startedAt

    return durationInMiliSeconds - timeElapsedInMiliSeconds
  }
}

