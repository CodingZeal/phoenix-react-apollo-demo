/* @flow */

import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import TodoList from '../../components/TodoList'

export const fragments = {
  todo: gql`
    fragment TodoFields on Todo { id, title, completed }
  `
}

export const allTodos = gql`
  query allTodos { todos { ...TodoFields } }
  ${fragments.todo}
`

const updateTodo = gql`
  mutation updateTodo($id: ID!, $title: String, $completed: Boolean) {
    updateTodo(id: $id, title: $title, completed: $completed) { ...TodoFields }
  }
  ${fragments.todo}
`

const deleteTodo = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) { id }
  }
`

const updateTodoOptions = {
  props: ({ mutate }) => ({
    updateTodo: variables => mutate({ variables })
  })
}

const deleteTodoOptions = {
  props: ({ mutate, ownProps: { data: { refetch } } }) => ({
    deleteTodo: async ({ id }) => {
      await mutate({ variables: { id } })
      refetch()
    }
  })
}

export default compose(
  graphql(allTodos),
  graphql(updateTodo, updateTodoOptions),
  graphql(deleteTodo, deleteTodoOptions)
)(TodoList)
