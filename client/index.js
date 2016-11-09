import React from 'react'
import { render } from 'react-dom'

import 'root-styles.css'
import Root from 'containers/Root'
import configureStore from 'store'

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)
