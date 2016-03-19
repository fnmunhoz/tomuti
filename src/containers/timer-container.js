import { connect } from 'react-redux'
import PomodoroTimer from '../components/pomodoro-timer'
import { timeLeft } from '../reducers/current-pomodoro'

const mapStateToProps = (state, ownProps) => {
  const currentTime = (localState) => {
    let currentMinutes, currentSeconds

    if (localState.startedAt) {
      const time = new Date(timeLeft(localState))
      currentMinutes = time.getMinutes()
      currentSeconds = time.getSeconds()
    } else {
      currentMinutes = localState.durationMinutes
      currentSeconds = localState.durationSeconds
    }

    return { currentMinutes: currentMinutes, currentSeconds: currentSeconds }
  }

  return currentTime(
    state.currentPomodoro
  )
}

const Timer = connect(
  mapStateToProps
)(PomodoroTimer)

export default Timer
