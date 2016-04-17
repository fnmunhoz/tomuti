import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import PomodoroFooter from '../../components/pomodoro-footer'

describe('PomodoroFooter', () => {
  it('should show total count', () => {
    const shallowRenderer = ReactTestUtils.createRenderer()
    shallowRenderer.render(React.createElement(PomodoroFooter, { count: 1 }))

    const component = shallowRenderer.getRenderOutput()

    expect(component.type).toEqual('p')
    expect(component.props.children).toEqual('Total: 1')
  })
})
