import React from 'react'
import { connect } from 'react-redux'
import { fetchSongs } from 'actions/songs'

const SongList = ({ fetchSongs, songs }) => (
  <div>
    {
      songs.map(s => <li key={s.id}>{s.name}</li>)
    }
    <button
      onClick={fetchSongs}
    >
      load more
    </button>
  </div>
)

export default connect(
  state => ({ songs: state.songs.ids.map(i => state.songs.byId[i]) }),
  { fetchSongs }
)(SongList)
