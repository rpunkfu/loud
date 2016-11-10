import axios from 'axios'
import { normalize } from 'normalizr'
import { BASE_URL, CALL_API } from 'config'

const apiCall = (endpoint, options) => axios(`${BASE_URL}${endpoint}`, options)

export default store => next => (action) => {
  if (typeof action[CALL_API] === 'undefined') return next(action)

  const { endpoint, types, schema } = action[CALL_API]
  const [requestType, successType, errorType] = types

  store.dispatch({ type: requestType })

  return apiCall(endpoint, action[CALL_API], schema)
    .then(response => next({
      type: successType,
      response: normalize(response.data, schema)
    }))
    .catch(error => next({
      type: errorType,
      response: error
    }))
}

