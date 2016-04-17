import button from './../button.css'
import style from './style.css'

import React, { PropTypes } from 'react'

const PomodoroStart = ({ started, paused, onClick }) => {
  var buttonType
  if (paused) {
    buttonType = style.restart
  } else if (started) {
    buttonType = style.stop
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
