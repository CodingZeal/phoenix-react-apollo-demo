/* @flow */

import React from 'react'
import { themr } from 'react-css-themr';

import Todo from '../../components/Todo'
import type { Todo as TodoType } from '../../types'

import todoListTheme from './theme.scss'

type TodoListTheme = {
  todoList: string
}

function TodoList({ theme, data: { loading, todos } }: {
  theme: TodoListTheme,
  data: {
    loading: boolean,
    todos: Array<TodoType>
  },
}) {
  if (loading) return <h3>Loading...</h3>
  return (
    <div className={theme.todoList}>
      {todos.map(todo => <Todo key={todo.id} {...todo} />)}
    </div>
  )
}

export default themr('', todoListTheme)(TodoList)
