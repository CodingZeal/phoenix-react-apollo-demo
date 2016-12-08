/* @flow */
import React from 'react'
import { themr } from 'react-css-themr';

import Todo from '../../components/Todo'

import todoListTheme from './theme.scss'

type TodoListTheme = {
  todoList: string
}

function TodoList({ theme }: { theme: TodoListTheme }) {
  return (
    <div className={theme.todoList}>
      <Todo
          completed
          title='Do something'
          onChange={() => {}}
          onToggle={() => {}} />

      <Todo
          title='Do something else'
          onChange={() => {}}
          onToggle={() => {}} />
    </div>
  )
}

export default themr('', todoListTheme)(TodoList)
