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

const updateTodoOptions = {
  props: ({ mutate }) => ({
    updateTodo: variables => mutate({ variables })
  })
}

export default compose(
  graphql(allTodos),
  graphql(updateTodo, updateTodoOptions)
)(TodoList)
