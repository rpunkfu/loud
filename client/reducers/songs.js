import { combineReducers } from 'redux'
import { FETCH_SUCCESS } from 'constants/songs'

const byId = (state = {}, action) => {
  if (!action.response) return state
  return { ...state, ...action.response.entities.songs }
}

const ids = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.response.result
    default:
      return state
  }
}

export default combineReducers({
  byId,
  ids
})
