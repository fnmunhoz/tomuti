import React from 'react'
import { shallow } from 'enzyme'

import Pomodoro from '.'
import style from './style.css'

describe('Pomodoro', () => {
  it('should render the <Pomodoro /> component', () => {
    const wrapper = shallow(<Pomodoro />)

    expect(wrapper.type()).toEqual('div')
    expect(wrapper.hasClass(style.component)).toEqual(true)
  })
})
