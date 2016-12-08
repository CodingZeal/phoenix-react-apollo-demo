/* @flow */

import React from 'react'
import { themr } from 'react-css-themr';

import { TodoListContainer } from '../../../../modules/todo'

import todoTheme from './theme.scss'

type TodoTheme = {
  todoListWrapper: string,
  todoList: string
}

function TodoLayout({ theme }: { theme: TodoTheme }) {
  return (
    <div className={theme.todoListWrapper}>
      <TodoListContainer theme={theme} />
    </div>
  )
}

export default themr('', todoTheme)(TodoLayout)
