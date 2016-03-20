import style from './pomodoro-start.css'

import React, { PropTypes } from 'react'
import ReactInterval from 'react-interval'

const PomodoroStart = ({ started, onClick, onInterval }) => (
  <div>
    <ReactInterval
      timeout={200}
      enabled={started}
      callback={onInterval}
    />

    <button
      className={`${style.button} ${started ? style.stop : style.start}`}
      onClick={onClick}
    />
  </div>
)

PomodoroStart.propTypes = {
  started: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onInterval: PropTypes.func.isRequired
}

export default PomodoroStart
