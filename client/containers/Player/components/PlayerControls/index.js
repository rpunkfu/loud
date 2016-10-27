import React from 'react'
import cx from 'classnames'

import styles from './style.css'

export default ({ isPlaying, playHandler }) => (
  <div className={styles.playerControls}>
    <button
      className={cx(styles.button, styles.utils, styles.shuffle)}
    />
    <button
      className={cx(styles.button, styles.skip, styles.prev)}
    />
    <button
      onClick={playHandler}
      className={cx(styles.button, styles.playback, {
        [styles.play]: !isPlaying,
        [styles.pause]: isPlaying
      })}
    />
    <button
      className={cx(styles.button, styles.skip, styles.next)}
    />
    <button
      className={cx(styles.button, styles.utils, styles.repeat)}
    />
  </div>
)
