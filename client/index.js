/* @flow */

import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router'
import { ThemeProvider } from 'react-css-themr';

import theme from './styles/theme'

import 'normalize.css'
import './styles/globals.scss'

import App from './modules/app/components/App'
import { apolloClient, configureStore } from './base'

const rootEl = document.getElementById('root')
const store = configureStore()

ReactDOM.render(<Root currentApp={App} />, rootEl)

function Root({ currentApp }) {
  return (
    <ApolloProvider client={apolloClient} store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {React.createElement(currentApp)}
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  )
}

if (module.hot) {
  module.hot.accept('./modules/app/components/App', () => {
    const NextApp = require('./modules/app/components/App').default

    ReactDOM.render(<Root currentApp={NextApp} />, rootEl)
  })
}
