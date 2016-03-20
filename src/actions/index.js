import * as types from '../constants/action-types'

export function setStart () {
  const currentTime = Date.now()
  return (dispatch) => {
    dispatch({
      type: types.START,
      currentTime: currentTime
    })
  }
}

export function updateTime () {
  const currentTime = Date.now()
  return (dispatch) => {
    dispatch({
      type: types.UPDATE,
      currentTime: currentTime
    })
  }
}
