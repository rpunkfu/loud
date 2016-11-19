import { handleActions } from 'redux-actions'
import { CHANGE_SONG } from 'constants/player'

const defaultState = {
  currentSong: 'ZJpeH8IZoa7r'
}

export default handleActions({
  [CHANGE_SONG]: (state, action) => ({
    currentSong: action.payload.id
  })
}, defaultState)
