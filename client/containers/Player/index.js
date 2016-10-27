import React, { Component } from 'react'
import styles from './style.css'

import PlayerControls from './components/PlayerControls'

const formatSeconds = (num) => {
  const minutes = (Math.floor(num / 60)).toString(10).padStart(2, '0')
  const seconds = (Math.floor(num % 60)).toString(10).padStart(2, '0')
  return `${minutes}:${seconds}`
}

export default class Player extends Component {
  state = {
    isPlaying: false,
    currentTime: 0
  }

  constructor (props) {
    super(props)
    this.audioController = document.createElement('audio')
    this.audioController.src = 'https://goo.gl/fYKBSO'
  }

  togglePlay = () => {
    this.setState({ isPlaying: !this.state.isPlaying })
    this.state.isPlaying
      ? this.audioController.pause()
      : this.audioController.play()
  }

  render () {
    return (
      <div className={styles.player}>
        <PlayerControls
          isPlaying={this.state.isPlaying}
          playHandler={this.togglePlay}
        />
      </div>
    )
  }
}
