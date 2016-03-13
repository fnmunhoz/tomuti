var React = require('react')

export default React.createClass({
  propTypes: {
    startedAt: React.PropTypes.number,
    duration: React.PropTypes.number
  },

  render: function () {
    return (
      <div>
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
      let time = new Date((this.props.duration * 60000) - (Date.now() - this.props.startedAt))
      m = pad(time.getMinutes().toString(), 2)
      s = pad(time.getSeconds().toString(), 2)
    } else {
      m = this.props.duration
      s = '00'
    }

    return `${m}:${s}`
  }
})
