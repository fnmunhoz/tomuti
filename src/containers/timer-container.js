import { connect } from 'react-redux'
import PomodoroTimer from '../components/pomodoro-timer'

const mapStateToProps = (state, ownProps) => {
  return {
    currentMinutes: state.currentPomodoro.currentMinutes,
    currentSeconds: state.currentPomodoro.currentSeconds
  }
}

export default connect(
  mapStateToProps
)(PomodoroTimer)
