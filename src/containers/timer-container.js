import { connect } from 'react-redux'
import PomodoroTimer from '../components/pomodoro-timer'

const mapStateToProps = (state, ownProps) => {
  const currentTime = (localState) => {
    let currentMinutes, currentSeconds

    if (localState.timeLeft) {
      const timeLeft = new Date(localState.timeLeft)
      currentMinutes = timeLeft.getMinutes()
      currentSeconds = timeLeft.getSeconds()
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
