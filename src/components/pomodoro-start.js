import button from './button.css'
import style from './pomodoro-start.css'

import React, { PropTypes } from 'react'

const PomodoroStart = ({ started, onClick }) => (
  <button
    className={`${button.default} ${started ? style.stop : style.start}`}
    onClick={onClick}
  />
)

PomodoroStart.propTypes = {
  started: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default PomodoroStart
