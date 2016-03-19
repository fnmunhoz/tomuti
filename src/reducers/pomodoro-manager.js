import TimeLeft from '../lib/time-left'

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
      let timeLeft = TimeLeft(state.durationMinutes, state.durationSeconds, state.startedAt)

      if (timeLeft && timeLeft < 0) {
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
