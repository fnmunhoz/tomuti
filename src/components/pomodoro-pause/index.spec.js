import React from 'react'
import { shallow } from 'enzyme'

import PomodoroPause from '.'
import styleButton from './../shared/button.css'
import style from './style.css'

describe('PomodoroPause started and not paused', () => {
  it('should render the pause button', () => {
    const onClickHandler = sinon.spy()

    const wrapper = shallow(<PomodoroPause started paused={false} onClick={onClickHandler} />)

    expect(wrapper.type()).toEqual('button')
    expect(wrapper.hasClass(styleButton.default)).toEqual(true)
    expect(wrapper.hasClass(style.pause)).toEqual(true)
    expect(wrapper.hasClass(style.hide)).toEqual(false)

    wrapper.simulate('click')
    expect(onClickHandler.calledOnce).toEqual(true)
  })
})

describe('PomodoroPause started and paused', () => {
  it('should render the pause button', () => {
    const onClickHandler = sinon.spy()

    const wrapper = shallow(<PomodoroPause started paused onClick={onClickHandler} />)

    expect(wrapper.type()).toEqual('button')
    expect(wrapper.hasClass(styleButton.default)).toEqual(true)
    expect(wrapper.hasClass(style.pause)).toEqual(true)
    expect(wrapper.hasClass(style.hide)).toEqual(false)

    wrapper.simulate('click')
    expect(onClickHandler.calledOnce).toEqual(true)
  })
})

describe('PomodoroPause not started and paused', () => {
  it('should render the pause button', () => {
    const onClickHandler = sinon.spy()

    const wrapper = shallow(<PomodoroPause started={false} paused onClick={onClickHandler} />)

    expect(wrapper.type()).toEqual('button')
    expect(wrapper.hasClass(styleButton.default)).toEqual(true)
    expect(wrapper.hasClass(style.pause)).toEqual(true)
    expect(wrapper.hasClass(style.hide)).toEqual(false)

    wrapper.simulate('click')
    expect(onClickHandler.calledOnce).toEqual(true)
  })
})

describe('PomodoroPause not started and not paused', () => {
  it('should render the pause button', () => {
    const onClickHandler = sinon.spy()

    const wrapper = shallow(
      <PomodoroPause started={false} paused={false} onClick={onClickHandler} />
    )

    expect(wrapper.type()).toEqual('button')
    expect(wrapper.hasClass(styleButton.default)).toEqual(true)
    expect(wrapper.hasClass(style.pause)).toEqual(false)
    expect(wrapper.hasClass(style.hide)).toEqual(true)

    wrapper.simulate('click')
    expect(onClickHandler.calledOnce).toEqual(true)
  })
})
