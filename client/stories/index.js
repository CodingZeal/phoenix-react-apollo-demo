import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { Todo } from '../modules/todo';

storiesOf('Todo', module)
  .add('empty', () => (
    <Todo />
  ))
