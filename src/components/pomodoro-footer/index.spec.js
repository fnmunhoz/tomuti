import React from 'react'
import { shallow } from 'enzyme'

import PomodoroFooter from '.'

describe('PomodoroFooter', () => {
  it('should show total count', () => {
    const wrapper = shallow(<PomodoroFooter count='1' />)

    expect(wrapper.type()).toEqual('p')
    expect(wrapper.text()).toEqual('Total: 1')
  })
})
