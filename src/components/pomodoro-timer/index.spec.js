import React from 'react'
import { shallow } from 'enzyme'

import PomodoroTimer from '.'
import style from './style.css'

describe('PomodoroTimer', () => {
  it('should show the timer with padding', () => {
    const wrapper = shallow(<PomodoroTimer currentMinutes={25} currentSeconds={0} />)

    expect(wrapper.type()).toEqual('div')
    expect(wrapper.hasClass(style.label)).toEqual(true)
    expect(wrapper.text()).toEqual('25:00')
  })
})

describe('PomodoroTimer', () => {
  it('should show the timer with padding', () => {
    const wrapper = shallow(<PomodoroTimer currentMinutes={5} currentSeconds={20} />)
    expect(wrapper.type()).toEqual('div')
    expect(wrapper.hasClass(style.label)).toEqual(true)
    expect(wrapper.text()).toEqual('05:20')
  })
})
