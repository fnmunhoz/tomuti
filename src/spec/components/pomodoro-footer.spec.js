import { createElement } from 'react'
import sd from 'skin-deep'

import PomodoroFooter from '../../components/pomodoro-footer'

describe('PomodoroFooter', () => {
  let component

  beforeEach(() => {
    component = sd.shallowRender(createElement(
      PomodoroFooter, { count: 1 }
    ))
  })

  it('should show total count', () => {
    expect(component.type).toEqual('p')
    expect(component.props.children).toEqual('Total: 1')
  })
})
