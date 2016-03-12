import style from './ticker.css'

import StartButton from './start-button'

var React = require('react')

export default React.createClass({
  render: function () {
    return (
      <div className={style.component}>
        25:00
        <StartButton onClick={this.clickStart} label='Start2' />
      </div>
    )
  },

  clickStart: function () {
    console.log('start')
  }
})
