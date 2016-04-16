import currentPomodoro from '../../reducers/current-pomodoro'

import {
  START,
  UPDATE
} from '../../constants/action-types'

const ONE_SECOND = 1000

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
    const durationMinutes = 25
    const durationSeconds = 0
    const currentTime = 10

    const notStartedState = {
      durationMinutes: durationMinutes,
      durationSeconds: durationSeconds,
      count: 0,
      startedAt: undefined,
      currentMinutes: durationMinutes,
      currentSeconds: durationSeconds
    }

    expect(currentPomodoro(notStartedState, { type: START, currentTime: currentTime })).toEqual({
      durationMinutes: durationMinutes,
      durationSeconds: durationSeconds,
      count: 0,
      startedAt: currentTime,
      currentMinutes: durationMinutes,
      currentSeconds: durationSeconds
    })
  })

  it('should update startedAt to undefined', () => {
    const durationMinutes = 25
    const durationSeconds = 0

    const startedState = {
      durationMinutes: durationMinutes,
      durationSeconds: durationSeconds,
      count: 0,
      startedAt: 300,
      currentMinutes: durationMinutes,
      currentSeconds: durationSeconds
    }

    expect(currentPomodoro(startedState, { type: START, currentTime: 10 })).toEqual({
      durationMinutes: durationMinutes,
      durationSeconds: durationSeconds,
      count: 0,
      startedAt: undefined,
      currentMinutes: durationMinutes,
      currentSeconds: durationSeconds
    })
  })
})

describe('currentPomodoro UPDATE', () => {
  it('should update currentTime', () => {
    const durationMinutes = 1
    const durationSeconds = 0
    const startedAt = 45 * ONE_SECOND

    const state = {
      durationMinutes: durationMinutes,
      durationSeconds: durationSeconds,
      startedAt: startedAt
    }

    expect(currentPomodoro(state, { type: UPDATE, currentTime: 50 * ONE_SECOND })).toEqual({
      durationMinutes: durationMinutes,
      durationSeconds: durationSeconds,
      startedAt: startedAt,
      currentMinutes: 0,
      currentSeconds: 55
    })
  })

  it('should update currentTime', () => {
    const durationMinutes = 25
    const durationSeconds = 0
    const startedAt = 3 * 60 * ONE_SECOND

    const state = {
      durationMinutes: durationMinutes,
      durationSeconds: durationSeconds,
      startedAt: startedAt
    }

    expect(currentPomodoro(state, { type: UPDATE, currentTime: 5 * 60 * ONE_SECOND })).toEqual({
      durationMinutes: durationMinutes,
      durationSeconds: durationSeconds,
      startedAt: startedAt,
      currentMinutes: 23,
      currentSeconds: 0
    })
  })
})
