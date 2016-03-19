import TimeLeft from '../lib/time-left'

const pomodoroManager = (state = {}, action) => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        startedAt: state.startedAt ? undefined : Date.now()
      }
    case 'UPDATE':
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
