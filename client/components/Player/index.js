import React, { Component } from 'react'

export default class Player extends Component {
  state = {
    isPlaying: false
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
      <div>
        <button onClick={this.togglePlay} />
      </div>
    )
  }
}
