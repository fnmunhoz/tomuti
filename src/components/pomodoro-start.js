import button from './button.css'
import style from './pomodoro-start.css'

import React, { PropTypes } from 'react'

const PomodoroStart = ({ started, paused, onClick }) => (
  <button
    className={`${button.default} ${started ? style.stop : style.start} ${paused ? style.hide : style.show}`}
    onClick={onClick}
  />
)

PomodoroStart.propTypes = {
  started: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default PomodoroStart
