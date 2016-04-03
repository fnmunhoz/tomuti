import currentPomodoro from '../../reducers/current-pomodoro'

import {
  START,
  UPDATE
} from '../../constants/action-types'

describe('currentPomodoro defaults', () => {
  const durationMinutes = 25
  const durationSeconds = 0

  const initialState = {
    durationMinutes: durationMinutes,
    durationSeconds: durationSeconds,
    count: 0,
    startedAt: undefined,
    currentMinutes: durationMinutes,
    currentSeconds: durationSeconds
  }

  it('should provide the default state', () => {
    expect(currentPomodoro(undefined, {})).toEqual(initialState)
  })

  it('should provide the passed state', () => {
    expect(currentPomodoro({}, {})).toEqual({})
  })

  it('should provide the passed state for START action', () => {
    expect(currentPomodoro(initialState, { type: START })).toEqual(initialState)
  })

  it('should return NaN for UPDATE action', () => {
    expect(currentPomodoro(initialState, { type: UPDATE })).toEqual({
      durationMinutes: 25,
      durationSeconds: 0,
      count: 0,
      startedAt: undefined,
      currentMinutes: NaN,
      currentSeconds: NaN
    })
  })
})

describe('currentPomodoro START', () => {
  it('should update startedAt to currentTime', () => {
    const notStartedState = {
      durationMinutes: 25,
      durationSeconds: 0,
      count: 0,
      startedAt: undefined,
      currentMinutes: 25,
      currentSeconds: 0
    }

    expect(currentPomodoro(notStartedState, { type: START, currentTime: 10 })).toEqual({
      durationMinutes: 25,
      durationSeconds: 0,
      count: 0,
      startedAt: 10,
      currentMinutes: 25,
      currentSeconds: 0
    })
  })

  it('should update startedAt to undefined', () => {
    const startedState = {
      durationMinutes: 25,
      durationSeconds: 0,
      count: 0,
      startedAt: 300,
      currentMinutes: 25,
      currentSeconds: 0
    }

    expect(currentPomodoro(startedState, { type: START, currentTime: 10 })).toEqual({
      durationMinutes: 25,
      durationSeconds: 0,
      count: 0,
      startedAt: undefined,
      currentMinutes: 25,
      currentSeconds: 0
    })
  })
})

describe('currentPomodoro UPDATE', () => {
  it('should update currentTime', () => {
    const state = {
      durationMinutes: 1,
      durationSeconds: 0,
      startedAt: 45 * 1000
    }

    expect(currentPomodoro(state, { type: UPDATE, currentTime: 50 * 1000 })).toEqual({
      durationMinutes: 1,
      durationSeconds: 0,
      startedAt: 45 * 1000,
      currentMinutes: 0,
      currentSeconds: 55
    })
  })

  it('should update currentTime', () => {
    const durationMinutes = 25
    const durationSeconds = 0
    const currentTime = 5 * 60 * 1000
    const startedAt = 3 * 60 * 1000

    const state = {
      durationMinutes: durationMinutes,
      durationSeconds: durationSeconds,
      startedAt: startedAt
    }

    expect(currentPomodoro(state, { type: UPDATE, currentTime: currentTime })).toEqual({
      durationMinutes: durationMinutes,
      durationSeconds: durationSeconds,
      startedAt: startedAt,
      currentMinutes: 23,
      currentSeconds: 0
    })
  })
})
