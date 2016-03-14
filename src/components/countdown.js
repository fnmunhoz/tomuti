import style from './countdown.css'

var React = require('react')

export default React.createClass({
  propTypes: {
    currentMinutes: React.PropTypes.number,
    currentSeconds: React.PropTypes.number
  },

  render: function () {
    return (
      <div className={style.label}>
        { `${this.minutes()}:${this.seconds()}` }
      </div>
    )
  },

  minutes: function () {
    return this.pad(this.props.currentMinutes.toString())
  },

  seconds: function () {
    return this.pad(this.props.currentSeconds.toString())
  },

  pad: function (time, length) {
    while (time.length < 2) {
      time = '0' + time
    }
    return time
  }
})
