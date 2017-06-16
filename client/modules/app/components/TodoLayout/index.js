import React from 'react'
import { themr } from 'react-css-themr'

import { AddTodo, TodoList } from 'modules/todo'

import todoTheme from './theme.scss'

function TodoLayout({ theme }) {
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
