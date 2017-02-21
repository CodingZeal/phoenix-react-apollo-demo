/* @flow */

import React from 'react'
import { themr } from 'react-css-themr'
import ProgressBar from 'react-toolbox/lib/progress_bar/ProgressBar'
import { compose } from 'react-apollo'

import Todo from '../../components/Todo'
import type { Todo as TodoType } from '../../types'

import container from './container'
import todoListTheme from './theme.scss'

type TodoListTheme = {
  todoList: string
}

function TodoList({ data: { loading, todos }, theme, deleteTodo, updateTodo }: {
  data: { loading: boolean, todos: Array<TodoType> },
  theme: TodoListTheme,
  deleteTodo: () => void,
  updateTodo: () => void
}) {
  if (loading) return <Loading theme={theme} />

  return (
    <div className={theme.todoList}>
      {todos.map(todo =>
        <Todo
            {...todo}
            key={todo.id}
            onChange={title => updateTodo({ ...todo, title })}
            onDelete={() => deleteTodo(todo)}
            onToggle={completed => updateTodo({ ...todo, completed })} />
      )}
    </div>
  )
}

function Loading({ theme }) {
  return (
    <div className={theme.todoList}>
      <ProgressBar type='circular' mode='indeterminate' />
    </div>
  )
}

export default compose(container, themr('', todoListTheme))(TodoList)
