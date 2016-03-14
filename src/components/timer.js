import style from './timer.css'

import StartButton from './start-button'
import Countdown from './countdown'

var React = require('react')

export default React.createClass({
  propTypes: {
    currentMinutes: React.PropTypes.number,
    currentSeconds: React.PropTypes.number,
    status: React.PropTypes.string,
    startToggle: React.PropTypes.func,
    quantity: React.PropTypes.number
  },

  render: function () {
    return (
      <div className={style.component}>
        <Countdown
          currentMinutes={this.props.currentMinutes}
          currentSeconds={this.props.currentSeconds}
        />
        <StartButton onClick={this.props.startToggle} status={this.props.status} />
        <p>Total: {this.props.quantity}</p>
      </div>
    )
  }
})
