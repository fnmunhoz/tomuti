import * as types from '../constants/action-types'

export function setStart () {
  return (dispatch) => {
    const currentTime = Date.now()

    dispatch({
      type: types.START,
      currentTime: currentTime
    })
  }
}

export function updateTime () {
  return (dispatch) => {
    const currentTime = Date.now()

    dispatch({
      type: types.UPDATE,
      currentTime: currentTime
    })
  }
}
