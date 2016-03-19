import * as types from '../constants/action-types'

export function setStart () {
  return (dispatch) => {
    dispatch({
      type: types.START
    })
  }
}

export function updateTime () {
  return (dispatch) => {
    dispatch({
      type: types.UPDATE
    })
  }
}
