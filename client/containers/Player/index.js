import React, { Component } from 'react'
import styles from './style.css'

import PlayerControls from 'containers/Player/components/PlayerControls'
import PlayerProgress from 'containers/Player/components/PlayerProgress'

const closerThan = (x, y, maxDiff) => Math.abs(x - y) < maxDiff

export default class Player extends Component {
  state = {
    duration: 0,
    currentTime: 0,
    currentSong: 0,
    isPlaying: false,
    songList: [
      'http://localhost:3030/stream/ZJpeH8IZoa7r.128.mp3',
    ]
  }

  constructor (props) {
    super(props)
    this.audioController = document.createElement('audio')
    this.audioController.src = this.state.songList[0]
    this.audioController.preload = 'auto'

    this.audioController
      .addEventListener('loadedmetadata', this.handleLoadedMetadata, false)
    this.audioController
      .addEventListener('timeupdate', this.handleTimeUpdate, false)
  }

  handleLoadedMetadata = () => {
    const { duration } = this.audioController
    this.setState({ duration })
  }

  handleTimeUpdate = ({ target }) => {
    const currentTime = parseFloat(target.currentTime || target.value || 0)
    this.setState({ currentTime })

    if (closerThan(this.audioController.currentTime, currentTime, 0.01)) {
      return
    }

    this.audioController.currentTime = currentTime
  }

  loadPrevSong () {
    this.audioController.src = this.state.currentSong
      ? this.state.songList[0]
      : this.state.songList[1]
    this.setState({ currentSong: !this.state.currentSong })
  }

  togglePlay = () => {
    this.setState({ isPlaying: !this.state.isPlaying })
    this.state.isPlaying
      ? this.audioController.pause()
      : this.audioController.play()
  }

  togglePrev = () => {
    this.audioController.pause()

    this.audioController.currentTime > 2
      ? this.audioController.currentTime = 0
      : this.loadPrevSong()

    this.audioController.play()
  }

  render () {
    return (
      <div className={styles.player}>
        <PlayerControls
          isPlaying={this.state.isPlaying}
          playHandler={this.togglePlay}
          prevHandler={this.togglePrev}
        />
        <PlayerProgress
          duration={this.state.duration}
          currentTime={this.state.currentTime}
          seekHandler={this.handleTimeUpdate}
        />
      </div>
    )
  }
}
