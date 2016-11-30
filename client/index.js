import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import 'normalize.css'

import App from './modules/app/components/App'
import { configureStore } from './base'

const rootEl = document.getElementById('root')
const store = configureStore()

ReactDOM.render(<Root currentApp={App} />, rootEl)

function Root({ currentApp }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {React.createElement(currentApp)}
      </BrowserRouter>
    </Provider>
  )
}

if (module.hot) {
  module.hot.accept('./modules/app/components/App', () => {
    const NextApp = require('./modules/app/components/App').default

    ReactDOM.render(<Root currentApp={NextApp} />, rootEl)
  })
}
