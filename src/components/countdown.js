import style from './countdown.css'

var React = require('react')

export default React.createClass({
  propTypes: {
    durationMinutes: React.PropTypes.number,
    durationSeconds: React.PropTypes.number,
    timeElapsed: React.PropTypes.number,
    status: React.PropTypes.string
  },

  render: function () {
    return (
      <div className={style.label}>
        { `${this.minutes()}:${this.seconds()}` }
      </div>
    )
  },

  minutes: function () {
    return this.pad(this.time().minutes.toString())
  },

  seconds: function () {
    return this.pad(this.time().seconds.toString())
  },

  time: function () {
    let m, s, time

    if (this.props.status === 'running') {
      time = new Date(this.props.timeElapsed)
      m = time.getMinutes()
      s = time.getSeconds()
    } else {
      m = this.props.durationMinutes
      s = this.props.durationSeconds
    }

    return { minutes: m, seconds: s }
  },

  pad: function (time, length) {
    while (time.length < 2) {
      time = '0' + time
    }
    return time
  }
})
