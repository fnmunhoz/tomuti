import button from './../shared/button.css'
import style from './style.css'

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
