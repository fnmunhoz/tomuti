import { connect } from 'react-redux'
import PomodoroTimer from '../components/pomodoro-timer'
import { timeLeft } from '../reducers/pomodoro-manager'

const mapStateToProps = (state, ownProps) => {
  const currentTime = (durationMinutes, durationSeconds, startedAt) => {
    let currentMinutes, currentSeconds

    if (startedAt) {
      const time = new Date(timeLeft(durationMinutes, durationSeconds, startedAt))
      currentMinutes = time.getMinutes()
      currentSeconds = time.getSeconds()
    } else {
      currentMinutes = durationMinutes
      currentSeconds = durationSeconds
    }

    return { currentMinutes: currentMinutes, currentSeconds: currentSeconds }
  }

  return currentTime(
    state.pomodoroManager.durationMinutes,
    state.pomodoroManager.durationSeconds,
    state.pomodoroManager.startedAt
  )
}

const Timer = connect(
  mapStateToProps
)(PomodoroTimer)

export default Timer
