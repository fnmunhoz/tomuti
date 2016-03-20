import style from './pomodoro-timer.css'

import React, { PropTypes } from 'react'

const PomodoroTimer = ({ currentMinutes, currentSeconds }) => {
  const Pad = (time) => {
    while (time.length < 2) {
      time = '0' + time
    }

    return time
  }

  const minutes = Pad(currentMinutes.toString())
  const seconds = Pad(currentSeconds.toString())

  return (
    <div className={style.label}>
      { `${minutes}:${seconds}` }
    </div>
  )
}

PomodoroTimer.propTypes = {
  currentMinutes: PropTypes.number.isRequired,
  currentSeconds: PropTypes.number.isRequired
}

export default PomodoroTimer
