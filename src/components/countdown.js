import style from './countdown.css'

var React = require('react')

export default React.createClass({
  propTypes: {
    startedAt: React.PropTypes.number,
    durationMinutes: React.PropTypes.number,
    durationSeconds: React.PropTypes.number,
    timeElapsed: React.PropTypes.number
  },

  render: function () {
    return (
      <div className={style.label}>
        {this.format()}
      </div>
    )
  },

  format: function () {
    const pad = (time, length) => {
      while (time.length < length) {
        time = '0' + time
      }
      return time
    }

    let m, s

    if (this.props.startedAt) {
      let time = new Date(this.props.timeElapsed)
      m = pad(time.getMinutes().toString(), 2)
      s = pad(time.getSeconds().toString(), 2)
    } else {
      m = pad(this.props.durationMinutes.toString(), 2)
      s = pad(this.props.durationSeconds.toString(), 2)
    }

    return `${m}:${s}`
  }
})
