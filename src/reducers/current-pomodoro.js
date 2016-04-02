import {
  START,
  UPDATE
} from '../constants/action-types'

const durationMinutes = 25
const durationSeconds = 0

const initialState = {
  durationMinutes: durationMinutes,
  durationSeconds: durationSeconds,
  count: 0,
  startedAt: undefined,
  currentMinutes: durationMinutes,
  currentSeconds: durationSeconds
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        startedAt: state.startedAt ? undefined : action.currentTime,
        currentMinutes: state.durationMinutes,
        currentSeconds: state.durationSeconds
      }
    case UPDATE:
      const timeLeftValue = timeLeft(state, action.currentTime)
      const currentDate = new Date(timeLeftValue)

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

    default:
      return state
  }
}

const timeLeft = (localState, currentTime) => {
  const minutesInSeconds = localState.durationMinutes * 60
  const seconds = localState.durationSeconds
  const durationInMiliSeconds = (minutesInSeconds + seconds) * 1000
  const timeElapsedInMiliSeconds = currentTime - localState.startedAt

  return durationInMiliSeconds - timeElapsedInMiliSeconds
}
