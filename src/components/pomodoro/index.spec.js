import { createElement } from 'react'
import sd from 'skin-deep'

import Pomodoro from '.'
import style from './style.css'

describe('Pomodoro', () => {
  let component

  beforeEach(() => {
    component = sd.shallowRender(createElement(
      Pomodoro
    ))
  })

  it('should show total count', () => {
    expect(component.type).toEqual('div')
    expect(component.props.className).toEqual(style.component)
  })
})
