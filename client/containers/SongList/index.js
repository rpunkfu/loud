import React from 'react'
import Hook from 'react-hooks'
import { connect } from 'react-redux'

import { Map } from 'components/Tools'
import { fetchSongs } from 'actions/songs'
import { changeSong } from 'actions/player'

const RawSong = ({ id, name, onClick }) => (
  <li onClick={onClick(id)}>{name}</li>
)

const Song = connect(
  null,
  dispatch => ({
    onClick: (id) => () => dispatch(changeSong(id))
  })
)(RawSong)

const SongList = ({ fetchSongs, songs }) => (
  <div>
    <Map from={songs} to={Song} />
    <Hook didMount={fetchSongs} />
  </div>
)

export default connect(
  state => ({ songs: state.songs.ids.map(i => state.songs.byId[i]) }),
  { fetchSongs }
)(SongList)
