/* @flow */

import { applyMiddleware, createStore, compose } from 'redux'

import apolloClient from './apolloClient'
import reducer from './reducer'

export default function configureStore() {
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(apolloClient.middleware()),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    )
  )

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default

      store.replaceReducer(nextReducer)
    })
  }

  return store
}
