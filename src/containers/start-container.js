import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import ReactInterval from 'react-interval'
import { setStart, updateTime } from '../actions'
import PomodoroStart from '../components/pomodoro-start'

class StartContainer extends Component {
  render () {
    return (
      <div>
        <ReactInterval
          timeout={200}
          enabled={this.props.started}
          callback={() => this.props.updateTime()}
        />

        <PomodoroStart
          started={this.props.started}
          onClick={() => this.props.setStart()}
        />
      </div>
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
