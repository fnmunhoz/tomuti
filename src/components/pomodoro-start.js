import style from './pomodoro-start.css'

import React, { PropTypes } from 'react'

const PomodoroStart = ({ started, onClick }) => (
  <button
    className={`${style.button} ${started ? style.stop : style.start}`}
    onClick={onClick}
  />
)

PomodoroStart.propTypes = {
  started: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default PomodoroStart
