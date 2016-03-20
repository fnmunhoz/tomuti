import { connect } from 'react-redux'
import PomodoroFooter from '../components/pomodoro-footer'

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.currentPomodoro.count
  }
}

export default connect(
  mapStateToProps
)(PomodoroFooter)
