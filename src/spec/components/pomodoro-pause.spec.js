import { createElement } from 'react'
import sd from 'skin-deep'

import PomodoroPause from '../../components/pomodoro-pause'
import styleButton from './../../components/shared/button.css'
import style from './../../components/pomodoro-pause/style.css'

describe('PomodoroPause started and not paused', () => {
  let component

  beforeEach(() => {
    component = sd.shallowRender(createElement(
      PomodoroPause, { started: true, paused: false, onClick: {} }
    ))
  })

  it('should render the pause button', () => {
    expect(component.type).toEqual('button')
    expect(component.props.className).toEqual(`${styleButton.default} ${style.pause}`)
  })
})

describe('PomodoroPause started and paused', () => {
  let component

  beforeEach(() => {
    component = sd.shallowRender(createElement(
      PomodoroPause, { started: true, paused: true, onClick: {} }
    ))
  })

  it('should render the pause button', () => {
    expect(component.type).toEqual('button')
    expect(component.props.className).toEqual(`${styleButton.default} ${style.pause}`)
  })
})

describe('PomodoroPause not started and paused', () => {
  let component

  beforeEach(() => {
    component = sd.shallowRender(createElement(
      PomodoroPause, { started: false, paused: true, onClick: {} }
    ))
  })

  it('should render the pause button', () => {
    expect(component.type).toEqual('button')
    expect(component.props.className).toEqual(`${styleButton.default} ${style.pause}`)
  })
})

describe('PomodoroPause not started and not paused', () => {
  let component

  beforeEach(() => {
    component = sd.shallowRender(createElement(
      PomodoroPause, { started: false, paused: false, onClick: {} }
    ))
  })

  it('should render the pause button', () => {
    expect(component.type).toEqual('button')
    expect(component.props.className).toEqual(`${styleButton.default} ${style.hide}`)
  })
})
