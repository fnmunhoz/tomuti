import currentPomodoro from '../../reducers/current-pomodoro'

import {
  START,
  UPDATE,
  PAUSE
} from '../../constants/action-types'

const ONE_SECOND = 1000

describe('currentPomodoro defaults', () => {
  const durationMinutes = 25
  const durationSeconds = 0

  const state = {
    durationMinutes: durationMinutes,
    durationSeconds: durationSeconds,
    count: 0,
    startedAt: undefined,
    currentMinutes: durationMinutes,
    currentSeconds: durationSeconds
  }

  it('should provide the default state', () => {
    expect(currentPomodoro(undefined, {})).toEqual(state)
  })

  it('should provide the passed state', () => {
    expect(currentPomodoro({}, {})).toEqual({})
  })

  it('should provide the passed state for START action', () => {
    expect(currentPomodoro(state, { type: START })).toEqual(state)
  })

  it('should return NaN for UPDATE action', () => {
    expect(currentPomodoro(state, { type: UPDATE })).toEqual({
      ...state,
      currentMinutes: NaN,
      currentSeconds: NaN
    })
  })

  it('should provide the passed state for PAUSE action', () => {
    expect(currentPomodoro(state, { type: PAUSE })).toEqual({
      ...state,
      durationMinutes: NaN,
      durationSeconds: NaN
    })
  })
})

describe('currentPomodoro START', () => {
  it('should update startedAt to currentTime', () => {
    const durationMinutes = 25
    const durationSeconds = 0
    const currentTime = 10

    const state = {
      durationMinutes: durationMinutes,
      durationSeconds: durationSeconds,
      count: 0,
      startedAt: undefined,
      currentMinutes: durationMinutes,
      currentSeconds: durationSeconds
    }

    expect(currentPomodoro(state, { type: START, currentTime: currentTime })).toEqual({
      ...state,
      startedAt: currentTime
    })
  })

  it('should update startedAt to undefined', () => {
    const durationMinutes = 25
    const durationSeconds = 0

    const state = {
      durationMinutes: durationMinutes,
      durationSeconds: durationSeconds,
      count: 0,
      startedAt: 300,
      currentMinutes: durationMinutes,
      currentSeconds: durationSeconds
    }

    expect(currentPomodoro(state, { type: START, currentTime: 10 })).toEqual({
      ...state,
      startedAt: undefined
    })
  })
})

describe('currentPomodoro UPDATE', () => {
  it('should update currentTime', () => {
    const state = {
      durationMinutes: 1,
      durationSeconds: 0,
      startedAt: 45 * ONE_SECOND
    }

    expect(currentPomodoro(state, { type: UPDATE, currentTime: 50 * ONE_SECOND })).toEqual({
      ...state,
      currentMinutes: 0,
      currentSeconds: 55
    })
  })

  it('should update currentTime', () => {
    const state = {
      durationMinutes: 25,
      durationSeconds: 0,
      startedAt: 3 * 60 * ONE_SECOND
    }

    expect(currentPomodoro(state, { type: UPDATE, currentTime: 5 * 60 * ONE_SECOND })).toEqual({
      ...state,
      currentMinutes: 23,
      currentSeconds: 0
    })
  })
})

describe('currentPomodoro PAUSE', () => {
  it('should update duration', () => {
    const state = {
      durationMinutes: 1,
      durationSeconds: 0,
      startedAt: 45 * ONE_SECOND
    }

    expect(currentPomodoro(state, { type: PAUSE, currentTime: 50 * ONE_SECOND })).toEqual({
      ...state,
      durationMinutes: 0,
      durationSeconds: 55,
      startedAt: undefined
    })
  })

  it('should update duration', () => {
    const state = {
      durationMinutes: 25,
      durationSeconds: 0,
      startedAt: 3 * 60 * ONE_SECOND
    }

    expect(currentPomodoro(state, { type: PAUSE, currentTime: 5 * 60 * ONE_SECOND })).toEqual({
      ...state,
      durationMinutes: 23,
      durationSeconds: 0,
      startedAt: undefined
    })
  })
})
