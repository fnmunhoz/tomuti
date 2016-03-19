import { connect } from 'react-redux'
import { setStart, updateTime } from '../actions'
import PomodoroStart from '../components/pomodoro-start'

const mapStateToProps = (state, ownProps) => {
  return {
    started: state.pomodoroManager.startedAt !== undefined
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setStart())
    },
    onInterval: () => {
      dispatch(updateTime())
    }
  }
}

const Start = connect(
  mapStateToProps,
  mapDispatchToProps
)(PomodoroStart)

export default Start
