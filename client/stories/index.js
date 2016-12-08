/* @flow */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Todo } from '../modules/todo';
import { ThemeProvider } from 'react-css-themr';

import theme from '../styles/theme'

function applyTheme(element) {
  return () => (
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  )
}

storiesOf('Todo', module)
  .add('empty', applyTheme(
    <Todo
        onChange={action('changed')}
        onToggle={action('checked')} />
  ))
  .add('with text', applyTheme(
    <Todo
        title='Do something'
        onChange={action('changed')}
        onToggle={action('toggled')} />
  ))
  .add('completed', applyTheme(
    <Todo
        completed
        title='Do something'
        onChange={action('changed')}
        onToggle={action('toggled')} />
  ))
