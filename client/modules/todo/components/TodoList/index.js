/* @flow */

import React from 'react'
import { themr } from 'react-css-themr';

import Todo from '../../components/Todo'
import type { Todo as TodoType } from '../../types'

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
  if (loading) return <h3>Loading...</h3>

  return (
    <div className={theme.todoList}>
      {todos.map(todo =>
        <Todo
          {...todo}
          key={todo.id}
          onChange={title => updateTodo({ ...todo, title })}
          onDelete={() => deleteTodo(todo)}
          onToggle={completed => updateTodo({ ...todo, completed })}
        />
      )}
    </div>
  )
}

export default themr('', todoListTheme)(TodoList)
