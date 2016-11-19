import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { FETCH_SUCCESS } from 'constants/songs'

const byId = (state = {}, action) => {
  if (!action.response) return state
  return { ...state, ...action.response.entities.songs }
}

const ids = handleActions({
  [FETCH_SUCCESS]: (_, action) => action.response.result
}, [])

export default combineReducers({
  byId,
  ids
})
