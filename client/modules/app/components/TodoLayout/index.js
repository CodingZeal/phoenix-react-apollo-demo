/* @flow */

import React from 'react'
import { themr } from 'react-css-themr'

import {
  AddTodoContainer as AddTodo,
  TodoListContainer as TodoList
} from 'modules/todo'

import todoTheme from './theme.scss'

type TodoTheme = {
  addTodo: String,
  addTodoWrapper: String,
  todoList: String,
  todoListWrapper: String
}

function TodoLayout({ theme }: { theme: TodoTheme }) {
  return (
    <div>
      <div className={theme.addTodoWrapper}>
        <AddTodo theme={theme} />
      </div>

      <div className={theme.todoListWrapper}>
        <TodoList theme={theme} />
      </div>
    </div>
  )
}

export default themr('', todoTheme)(TodoLayout)
