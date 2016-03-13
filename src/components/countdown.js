var React = require('react')

export default React.createClass({
  propTypes: {
    startedAt: React.PropTypes.number
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

    let time = new Date(1500000 - (Date.now() - this.props.startedAt))
    let m = pad(time.getMinutes().toString(), 2)
    let s = pad(time.getSeconds().toString(), 2)

    return `${m} : ${s}`
  }
})
