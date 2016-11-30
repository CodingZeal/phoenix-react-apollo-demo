import React from 'react'
import ReactDOM from 'react-dom'
import App from './modules/app/components/App'

const rootEl = document.getElementById('root')

ReactDOM.render(<App />, rootEl)

if (module.hot) {
  module.hot.accept('./modules/app/components/App', () => {
    const NextApp = require('./modules/app/components/App').default

    ReactDOM.render(<NextApp />, rootEl)
  })
}
