import { createAction } from 'redux-actions'
import { CHANGE_SONG } from 'constants/player'

export const changeSong = createAction(CHANGE_SONG, id => ({ id }))
