import { createElement } from 'react'
import sd from 'skin-deep'

import PomodoroPause from '.'
import styleButton from './../shared/button.css'
import style from './style.css'

describe('PomodoroPause started and not paused', () => {
  let component

  const onClickHandler = () => {}

  beforeEach(() => {
    component = sd.shallowRender(createElement(
      PomodoroPause, { started: true, paused: false, onClick: onClickHandler }
    ))
  })

  it('should render the pause button', () => {
    expect(component.type).toEqual('button')
    expect(component.props.onClick).toEqual(onClickHandler)
    expect(component.props.className).toEqual(`${styleButton.default} ${style.pause}`)
  })
})

describe('PomodoroPause started and paused', () => {
  let component

  const onClickHandler = () => {}

  beforeEach(() => {
    component = sd.shallowRender(createElement(
      PomodoroPause, { started: true, paused: true, onClick: onClickHandler }
    ))
  })

  it('should render the pause button', () => {
    expect(component.type).toEqual('button')
    expect(component.props.onClick).toEqual(onClickHandler)
    expect(component.props.className).toEqual(`${styleButton.default} ${style.pause}`)
  })
})

describe('PomodoroPause not started and paused', () => {
  let component

  const onClickHandler = () => {}

  beforeEach(() => {
    component = sd.shallowRender(createElement(
      PomodoroPause, { started: false, paused: true, onClick: onClickHandler }
    ))
  })

  it('should render the pause button', () => {
    expect(component.type).toEqual('button')
    expect(component.props.onClick).toEqual(onClickHandler)
    expect(component.props.className).toEqual(`${styleButton.default} ${style.pause}`)
  })
})

describe('PomodoroPause not started and not paused', () => {
  let component

  const onClickHandler = () => {}

  beforeEach(() => {
    component = sd.shallowRender(createElement(
      PomodoroPause, { started: false, paused: false, onClick: onClickHandler }
    ))
  })

  it('should render the pause button', () => {
    expect(component.type).toEqual('button')
    expect(component.props.onClick).toEqual(onClickHandler)
    expect(component.props.className).toEqual(`${styleButton.default} ${style.hide}`)
  })
})
