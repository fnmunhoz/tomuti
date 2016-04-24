import { createElement } from 'react'
import sd from 'skin-deep'

import PomodoroTimer from '.'
import style from './style.css'

describe('PomodoroTimer', () => {
  let component

  beforeEach(() => {
    component = sd.shallowRender(createElement(
      PomodoroTimer, { currentMinutes: 25, currentSeconds: 0 }
    ))
  })

  it('should show the timer with padding', () => {
    expect(component.type).toEqual('div')
    expect(component.props.className).toEqual(style.label)
    expect(component.props.children).toEqual('25:00')
  })
})

describe('PomodoroTimer', () => {
  let component

  beforeEach(() => {
    component = sd.shallowRender(createElement(
      PomodoroTimer, { currentMinutes: 5, currentSeconds: 20 }
    ))
  })

  it('should show the timer with padding', () => {
    expect(component.type).toEqual('div')
    expect(component.props.className).toEqual(style.label)
    expect(component.props.children).toEqual('05:20')
  })
})
