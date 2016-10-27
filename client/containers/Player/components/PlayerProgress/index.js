import React from 'react'

import styles from './style.css'

export default ({ currentTime, duration, seekHandler }) => (
  <div className={styles.playerProgress}>
    <progress
      max={duration}
      value={currentTime}
      className={styles.show}
    />
    <input
      type='range'
      max={duration}
      value={currentTime}
      onChange={seekHandler}
      className={styles.control}
    />
  </div>
)
