/* @flow */

import React from 'react'
import { Match, Miss } from 'react-router'
import { themr } from 'react-css-themr';

import TodoLayout from '../TodoLayout'

import appTheme from './theme.scss'
import logo from './logo.png'

type AppTheme = {
  app: string,
  header: string,
  logo: string
}

function App({ theme }: { theme: AppTheme }) {
  return (
    <div className={theme.app}>
      <div className={theme.header}>
        <img src={logo} className={theme.logo} alt='logo' />
        <h4>Welcome!</h4>
      </div>

      <Match exactly pattern='/' component={TodoLayout} />
      <Miss component={NotFound} />
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
