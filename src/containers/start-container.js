import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import ReactInterval from 'react-interval'
import { setStart, setPause, updateTime } from '../actions'
import PomodoroStart from '../components/pomodoro-start'
import PomodoroPause from '../components/pomodoro-pause'

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
          paused={this.props.paused}
          onClick={() => this.props.setStart()}
        />

        <PomodoroPause
          started={this.props.started}
          paused={this.props.paused}
          onClick={() => this.props.setPause()}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    started: state.currentPomodoro.startedAt !== undefined,
    paused: state.currentPomodoro.paused
  }
}

StartContainer.propTypes = {
  started: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  setStart: PropTypes.func.isRequired,
  setPause: PropTypes.func.isRequired,
  updateTime: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  { setStart, setPause, updateTime }
)(StartContainer)
