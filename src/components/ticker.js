import style from './ticker.css'

import ReactInterval from 'react-interval'

import StartButton from './start-button'
import Countdown from './countdown'

var React = require('react')

export default React.createClass({
  propTypes: {
    status: React.PropTypes.string,
    startToggle: React.PropTypes.func,
    tick: React.PropTypes.func,
    startedAt: React.PropTypes.number,
    duration: React.PropTypes.number
  },

  render: function () {
    return (
      <div className={style.component}>
        <Countdown duration={this.props.duration} startedAt={this.props.startedAt} status={this.props.status} />
        <ReactInterval timeout={100} enabled callback={this.props.tick} />
        <StartButton onClick={this.props.startToggle} status={this.props.status} />
      </div>
    )
  }
})
