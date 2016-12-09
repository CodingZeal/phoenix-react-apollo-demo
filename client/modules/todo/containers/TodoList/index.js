/* @flow */

import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import TodoList from '../../components/TodoList'

const allTodos = gql`
  query allTodos {
    todos {
      id,
      title,
      completed
    }
  }
`

const updateTodo = gql`
  mutation updateTodo($id: ID!, $title: String, $completed: String) {
    updateTodo(id: $id, title: $title, completed: $completed) {
      id,
      title,
      completed
    }
  }
`

const deleteTodo = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
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
