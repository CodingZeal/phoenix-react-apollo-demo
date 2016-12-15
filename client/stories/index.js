/* @flow */

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { ThemeProvider } from 'react-css-themr'
import { host } from 'storybook-host'

import { AddTodo, Todo } from 'modules/todo'

import 'styles/commons.scss'
import theme from 'styles/theme'

function applyTheme(element) {
  return function Component() {
    return (
      <ThemeProvider theme={theme}>
        {element}
      </ThemeProvider>
    )
  }
}

storiesOf('AddTodo', module)
  .addDecorator(host({
    align: 'top left',
    height: 80,
    width: 400
  }))
  .add('base', applyTheme(
    <AddTodo onSave={action('saved')} />
  ))

storiesOf('Todo', module)
  .addDecorator(host({
    align: 'top left',
    height: 80,
    width: 400
  }))
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
