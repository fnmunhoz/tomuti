import button from './button.css'
import style from './pomodoro-pause.css'

import React, { PropTypes } from 'react'

const PomodoroPause = ({ started, onClick }) => (
  <button
    className={`${button.default} ${started ? style.pause : style.hide}`}
    onClick={onClick}
  />
)

PomodoroPause.propTypes = {
  started: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default PomodoroPause
