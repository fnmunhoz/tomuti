import button from './button.css'
import style from './pomodoro-pause.css'

import React, { PropTypes } from 'react'

const PomodoroPause = ({ started, paused, onClick }) => (
  <button
    className={`${button.default} ${started || paused ? style.pause : style.hide}`}
    onClick={onClick}
  />
)

PomodoroPause.propTypes = {
  started: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default PomodoroPause
