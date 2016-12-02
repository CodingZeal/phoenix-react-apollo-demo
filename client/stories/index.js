import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Todo } from '../modules/todo';

storiesOf('Todo', module)
  .add('empty', () => (
    <Todo
        onChange={action('changed')}
        onToggle={action('checked')} />
  ))
  .add('with text', () => (
    <Todo
        text='Do something'
        onChange={action('changed')}
        onToggle={action('toggled')} />
  ))
  .add('completed', () => (
    <Todo
        completed
        text='Do something'
        onChange={action('changed')}
        onToggle={action('toggled')} />
  ))
