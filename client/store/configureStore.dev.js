import { applyMiddleware, compose, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import apiMiddleware from 'middleware/api'

import rootReducer from 'reducers'
import DevTools from 'containers/DevTools'

export default preloadedState => createStore(
  rootReducer,
  preloadedState,
  compose(
    applyMiddleware(thunk, apiMiddleware, createLogger()),
    DevTools.instrument()
  )
)
