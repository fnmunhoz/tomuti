import { connect } from 'react-redux'
import PomodoroFooter from '../components/pomodoro-footer'

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.pomodoroManager.count
  }
}

const Footer = connect(
  mapStateToProps
)(PomodoroFooter)

export default Footer
