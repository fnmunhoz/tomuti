import style from './ticker.css'

import ReactInterval from 'react-interval'

import StartButton from './StartButton'

var React = require('react')

export default React.createClass({
  propTypes: {
    value: React.PropTypes.object,
    startToggle: React.PropTypes.func,
    tick: React.PropTypes.func
  },

  render: function () {
    return (
      <div className={style.component}>
        {this.props.value.tick}
        <ReactInterval timeout={1000} enabled callback={this.props.tick} />
        <StartButton onClick={this.props.startToggle} status={this.props.value.status} />
      </div>
    )
  }
})
