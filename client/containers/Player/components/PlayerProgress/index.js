import React from 'react'

import Time from 'components/Time'

import styles from './style.css'

export default ({ currentTime, duration, seekHandler }) => (
  <div className={styles.playerProgress}>
    <Time
      value={currentTime}
      className={styles.time}
    />
    <div className={styles.bar}>
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
    <Time
      value={duration}
      className={styles.time}
    />
  </div>
)
