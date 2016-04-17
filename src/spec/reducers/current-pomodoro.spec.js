import currentPomodoro from '../../reducers/current-pomodoro'

import {
  START,
  UPDATE,
  PAUSE
} from '../../constants/action-types'

const ONE_SECOND = 1000

describe('currentPomodoro defaults', () => {
  const initMinutes = 25
  const initSeconds = 0

  const state = {
    initMinutes: initMinutes,
    initSeconds: initSeconds,
    durationMinutes: initMinutes,
    durationSeconds: initSeconds,
    count: 0,
    startedAt: undefined,
    currentMinutes: initMinutes,
    currentSeconds: initSeconds,
    paused: false
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
    expect(currentPomodoro(state, { type: UPDATE })).toEqual(state)
  })

  it('should provide the passed state for PAUSE action', () => {
    expect(currentPomodoro(state, { type: PAUSE })).toEqual({
      ...state,
      durationMinutes: NaN,
      durationSeconds: NaN,
      paused: true
    })
  })
})

describe('currentPomodoro START', () => {
  it('should update startedAt to currentTime', () => {
    const initMinutes = 25
    const initSeconds = 0
    const currentTime = 10

    const state = {
      initMinutes: initMinutes,
      initSeconds: initSeconds,
      count: 0,
      startedAt: undefined,
      currentMinutes: initMinutes,
      currentSeconds: initSeconds
    }

    expect(currentPomodoro(state, { type: START, currentTime: currentTime })).toEqual({
      ...state,
      startedAt: currentTime,
      durationMinutes: initMinutes,
      durationSeconds: initSeconds,
      paused: false
    })
  })

  it('should update startedAt to undefined', () => {
    const initMinutes = 25
    const initSeconds = 0

    const state = {
      initMinutes: initMinutes,
      initSeconds: initSeconds,
      count: 0,
      startedAt: 300,
      currentMinutes: initMinutes,
      currentSeconds: initSeconds,
      paused: false
    }

    expect(currentPomodoro(state, { type: START, currentTime: 10 })).toEqual({
      ...state,
      startedAt: undefined,
      durationMinutes: initMinutes,
      durationSeconds: initSeconds
    })
  })

  it('should restart when paused', () => {
    const initMinutes = 25
    const initSeconds = 0

    const state = {
      initMinutes: initMinutes,
      initSeconds: initSeconds,
      count: 0,
      startedAt: undefined,
      currentMinutes: initMinutes,
      currentSeconds: initSeconds,
      paused: true
    }

    expect(currentPomodoro(state, { type: START, currentTime: 10 })).toEqual({
      ...state,
      startedAt: undefined,
      durationMinutes: initMinutes,
      durationSeconds: initSeconds,
      paused: false
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

  it('should come back to init and increment count', () => {
    const state = {
      durationMinutes: 1,
      durationSeconds: 0,
      startedAt: 3 * 60 * ONE_SECOND,
      count: 0,
      initMinutes: 25,
      initSeconds: 0
    }

    expect(currentPomodoro(state, { type: UPDATE, currentTime: 5 * 60 * ONE_SECOND })).toEqual({
      ...state,
      currentMinutes: 25,
      currentSeconds: 0,
      count: 1,
      startedAt: undefined
    })
  })
})

describe('currentPomodoro PAUSE', () => {
  it('should update duration', () => {
    const state = {
      durationMinutes: 1,
      durationSeconds: 0,
      startedAt: 45 * ONE_SECOND,
      currentMinutes: 1,
      currentSeconds: 0,
      paused: false
    }

    expect(currentPomodoro(state, { type: PAUSE, currentTime: 50 * ONE_SECOND })).toEqual({
      ...state,
      durationMinutes: 0,
      durationSeconds: 55,
      startedAt: undefined,
      paused: true
    })
  })

  it('should update duration', () => {
    const currentTime = 5 * 60 * ONE_SECOND

    const state = {
      durationMinutes: 23,
      durationSeconds: 0,
      startedAt: undefined,
      currentMinutes: 20,
      currentSeconds: 0,
      paused: true
    }

    expect(currentPomodoro(state, { type: PAUSE, currentTime: currentTime })).toEqual({
      ...state,
      startedAt: currentTime,
      currentMinutes: 23,
      currentSeconds: 0,
      paused: false
    })
  })
})
