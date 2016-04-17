import style from './style.css'

import React from 'react'

import TimerContainer from '../../containers/timer-container'
import StartContainer from '../../containers/start-container'
import FooterContainer from '../../containers/footer-container'

const Pomodoro = () => (
  <div className={style.component}>
    <TimerContainer />
    <StartContainer />
    <FooterContainer />
  </div>
)

export default Pomodoro
