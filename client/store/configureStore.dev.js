import { applyMiddleware, compose, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from 'reducers'
import DevTools from 'containers/DevTools'

export default preloadedState => createStore(
  rootReducer,
  preloadedState,
  compose(
    applyMiddleware(thunk, createLogger()),
    DevTools.instrument()
  )
)
