import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { themr } from 'react-css-themr'

import TodoLayout from '../TodoLayout'

import appTheme from './theme.scss'
import logo from './logo.png'

export function App({ theme }) {
  return (
    <div className={theme.app}>
      <div className={theme.header}>
        <img src={logo} className={theme.logo} alt='logo' />
        <h4>Welcome!</h4>
      </div>

      <Switch>
        <Route exact path='/' component={TodoLayout} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

function NotFound() {
  return (
    <h5 style={{ margin: 40 }}>
      Route not found
    </h5>
  )
}

export default themr('', appTheme)(App)
