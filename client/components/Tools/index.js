import React from 'react'
import uuid from 'node-uuid'

export const If = ({ ok, children }) => ok ? children : null

export const Map = ({ from: xs, to: Component, ...rest }) =>
  <div>{xs.map(x => <Component key={x.id} {...x} {...rest} />)}</div>
