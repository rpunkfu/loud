import { CALL_API } from 'config'
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from 'constants/songs'
import * as schemas from 'schemas/song'

export const apiFetchSongs = () => ({
  [CALL_API]: {
    method: 'GET',
    endpoint: '/songs',
    headers: { 'Content-Type': 'application/json' },
    types: [FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE],
    schema: schemas.songs
  }
})

export const fetchSongs = () => dispatch => dispatch(apiFetchSongs())
