import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'

import DevTools from 'containers/DevTools'
import Player from 'containers/Player'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <DevTools />
      <Player />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
