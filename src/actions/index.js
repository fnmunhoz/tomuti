import * as types from '../constants/action-types'

export function setStart () {
  return (dispatch) => {
    dispatch({
      type: types.START,
      currentTime: Date.now()
    })
  }
}

export function updateTime () {
  return (dispatch) => {
    dispatch({
      type: types.UPDATE,
      currentTime: Date.now()
    })
  }
}
