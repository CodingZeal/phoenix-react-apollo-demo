/* @flow */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { AddTodo, Todo } from '../modules/todo';
import { ThemeProvider } from 'react-css-themr';

import '../styles/commons.scss'
import theme from '../styles/theme'

function applyTheme(element) {
  return () => (
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  )
}

storiesOf('AddTodo', module)
  .add('base', applyTheme(
    <AddTodo onSave={action('saved')} />
  ))

storiesOf('Todo', module)
  .add('empty', applyTheme(
    <Todo
        onChange={action('changed')}
        onDelete={action('deleted')}
        onToggle={action('checked')} />
  ))
  .add('with text', applyTheme(
    <Todo
        title='Do something'
        onChange={action('changed')}
        onDelete={action('deleted')}
        onToggle={action('toggled')} />
  ))
  .add('completed', applyTheme(
    <Todo
        completed
        title='Do something'
        onChange={action('changed')}
        onDelete={action('deleted')}
        onToggle={action('toggled')} />
  ))
