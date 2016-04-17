import button from './button.css'
import style from './pomodoro-start.css'

import React, { PropTypes } from 'react'

const PomodoroStart = ({ started, paused, onClick }) => {
  var buttonType
  if (started && !paused) {
    buttonType = style.stop
  } else if (paused) {
    buttonType = style.restart
  } else {
    buttonType = style.start
  }

  return (
    <button
      className={`${button.default} ${buttonType}`}
      onClick={onClick}
    />
  )
}

PomodoroStart.propTypes = {
  started: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default PomodoroStart
