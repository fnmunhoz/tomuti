import * as types from '../constants/action-types'

export const setStart = () => (dispatch) => {
  dispatch({
    type: types.START,
    currentTime: Date.now()
  })
}

export const setPause = () => (dispatch) => {
  dispatch({
    type: types.PAUSE,
    currentTime: Date.now()
  })
}

export const updateTime = () => (dispatch) => {
  dispatch({
    type: types.UPDATE,
    currentTime: Date.now()
  })
}
