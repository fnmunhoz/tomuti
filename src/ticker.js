import style from './ticker.css'

import StartButton from './start-button'

var React = require('react')

export default React.createClass({
  propTypes: {
    value: React.PropTypes.object,
    clickStart: React.PropTypes.func
  },

  render: function () {
    return (
      <div className={style.component}>
        25:00
        <StartButton onClick={this.props.clickStart} status={this.props.value.status} />
      </div>
    )
  }
})
