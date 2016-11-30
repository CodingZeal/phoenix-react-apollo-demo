import React from 'react'
import { Match, Miss } from 'react-router'

import styles from './styles.scss'
import logo from './logo.png'

export default function App({ store }) {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <img src={logo} className={styles.logo} alt='logo' />
        <h2>Welcome!</h2>
      </div>

      <Match exactly pattern='/' component={Home} />
      <Miss component={NotFound} />
    </div>
  )
}

function Home() {
  return (
    <h3>Home</h3>
  )
}

function NotFound() {
  return (
    <h3>Route not found</h3>
  )
}
