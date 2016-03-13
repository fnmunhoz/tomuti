import style from './ticker.css'

import ReactInterval from 'react-interval'

import StartButton from './StartButton'

var React = require('react')

export default React.createClass({
  propTypes: {
    value: React.PropTypes.object,
    startToggle: React.PropTypes.func,
    tick: React.PropTypes.func,
    startedAt: React.PropTypes.number
  },

  render: function () {
    return (
      <div className={style.component}>
        {this.format()}
        <ReactInterval timeout={100} enabled callback={this.props.tick} />
        <StartButton onClick={this.props.startToggle} status={this.props.value.status} />
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

    let time = new Date(1500000 - (Date.now() - this.props.value.startedAt))
    let m = pad(time.getMinutes().toString(), 2)
    let s = pad(time.getSeconds().toString(), 2)

    return `${m} : ${s}`
  }
})
