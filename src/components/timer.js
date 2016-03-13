import style from './timer.css'

import StartButton from './start-button'
import Countdown from './countdown'

var React = require('react')

export default React.createClass({
  propTypes: {
    status: React.PropTypes.string,
    startToggle: React.PropTypes.func,
    startedAt: React.PropTypes.number,
    durationMinutes: React.PropTypes.number,
    durationSeconds: React.PropTypes.number,
    timeElapsed: React.PropTypes.number
  },

  render: function () {
    return (
      <div className={style.component}>
        <Countdown
          durationMinutes={this.props.durationMinutes}
          durationSeconds={this.props.durationSeconds}
          startedAt={this.props.startedAt}
          status={this.props.status}
          timeElapsed={this.props.timeElapsed}
        />
        <StartButton onClick={this.props.startToggle} status={this.props.status} />
      </div>
    )
  }
})
