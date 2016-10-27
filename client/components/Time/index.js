import React from 'react'

const formatSeconds = (num) => {
  const minutes = (Math.floor(num / 60)).toString(10).padStart(2, '0')
  const seconds = (Math.floor(num % 60)).toString(10).padStart(2, '0')
  return `${minutes}:${seconds}`
}

export default ({ value, ...props }) => <span {...props}>{formatSeconds(value)}</span>
