/* @flow */

import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import apolloClient from './apolloClient'
import reducer from './reducer'

export default function configureStore() {
  const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(apolloClient.middleware())
  ))

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default

      store.replaceReducer(nextReducer)
    })
  }

  return store
}
