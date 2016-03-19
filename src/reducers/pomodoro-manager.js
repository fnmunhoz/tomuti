import {
  START,
  UPDATE
} from '../constants/action-types'

const initialState = {
  durationMinutes: 25,
  durationSeconds: 0,
  count: 0,
  startedAt: undefined
}

const pomodoroManager = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        startedAt: state.startedAt ? undefined : Date.now()
      }
    case UPDATE:
      let timeLeftValue = timeLeft(state.durationMinutes, state.durationSeconds, state.startedAt)

      if (timeLeftValue && timeLeftValue < 0) {
        return {
          ...state,
          startedAt: undefined,
          count: state.count + 1
        }
      } else {
        return {
          ...state
        }
      }

      break

    default:
      return state
  }
}

export default pomodoroManager

export const timeLeft = (durationMinutes, durationSeconds, startedAt) => {
  if (startedAt) {
    let minutesInSeconds = durationMinutes * 60
    let seconds = durationSeconds
    let durationInMiliSeconds = (minutesInSeconds + seconds) * 1000
    let timeElapsedInMiliSeconds = Date.now() - startedAt

    return durationInMiliSeconds - timeElapsedInMiliSeconds
  }
}

