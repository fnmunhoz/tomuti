import React from 'react'
import { shallow } from 'enzyme'

import PomodoroStart from '.'
import styleButton from './../shared/button.css'
import style from './style.css'

describe('PomodoroStart', () => {
  it('should render the restart button', () => {
    const onClickHandler = sinon.spy()

    const wrapper = shallow(<PomodoroStart started paused onClick={onClickHandler} />)

    expect(wrapper.type()).toEqual('button')
    expect(wrapper.hasClass(styleButton.default)).toEqual(true)
    expect(wrapper.hasClass(style.restart)).toEqual(true)
    expect(wrapper.hasClass(style.start)).toEqual(false)
    expect(wrapper.hasClass(style.stop)).toEqual(false)

    wrapper.simulate('click')
    expect(onClickHandler.calledOnce).toEqual(true)
  })

  it('should render the stop button', () => {
    const onClickHandler = sinon.spy()

    const wrapper = shallow(<PomodoroStart started paused={false} onClick={onClickHandler} />)

    expect(wrapper.type()).toEqual('button')
    expect(wrapper.hasClass(styleButton.default)).toEqual(true)
    expect(wrapper.hasClass(style.restart)).toEqual(false)
    expect(wrapper.hasClass(style.start)).toEqual(false)
    expect(wrapper.hasClass(style.stop)).toEqual(true)

    wrapper.simulate('click')
    expect(onClickHandler.calledOnce).toEqual(true)
  })

  it('should render the start button', () => {
    const onClickHandler = sinon.spy()

    const wrapper = shallow(<PomodoroStart started={false} paused={false} onClick={onClickHandler} />)

    expect(wrapper.type()).toEqual('button')
    expect(wrapper.hasClass(styleButton.default)).toEqual(true)
    expect(wrapper.hasClass(style.restart)).toEqual(false)
    expect(wrapper.hasClass(style.start)).toEqual(true)
    expect(wrapper.hasClass(style.stop)).toEqual(false)

    wrapper.simulate('click')
    expect(onClickHandler.calledOnce).toEqual(true)
  })

  it('should render the restart button', () => {
    const onClickHandler = sinon.spy()

    const wrapper = shallow(<PomodoroStart started={false} paused onClick={onClickHandler} />)

    expect(wrapper.type()).toEqual('button')
    expect(wrapper.hasClass(styleButton.default)).toEqual(true)
    expect(wrapper.hasClass(style.restart)).toEqual(true)
    expect(wrapper.hasClass(style.start)).toEqual(false)
    expect(wrapper.hasClass(style.stop)).toEqual(false)

    wrapper.simulate('click')
    expect(onClickHandler.calledOnce).toEqual(true)
  })
})
