import style from './pomodoro.css'

import React from 'react'

import Timer from '../containers/timer'
import Start from '../containers/start'
import Footer from '../containers/footer'

const Pomodoro = () => (
  <div className={style.component}>
    <Timer />
    <Start />
    <Footer />
  </div>
)

export default Pomodoro
