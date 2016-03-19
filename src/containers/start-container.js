import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import { setStart, updateTime } from '../actions'
import PomodoroStart from '../components/pomodoro-start'

class StartContainer extends Component {
  render () {
    return (
      <PomodoroStart
        started={this.props.started}
        onClick={ () => this.props.setStart() }
        onInterval={ () => this.props.updateTime() } />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    started: state.currentPomodoro.startedAt !== undefined
  }
}

StartContainer.propTypes = {
  started: PropTypes.bool.isRequired,
  setStart: PropTypes.func.isRequired,
  updateTime: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  { setStart, updateTime }
)(StartContainer)
