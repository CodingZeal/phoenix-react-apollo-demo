/* @flow */

import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import AddTodo from '../../components/AddTodo'
import { allTodos, fragments } from '../TodoList'

const createTodo = gql`
  mutation createTodo($title: String, $completed: Boolean) {
    createTodo(title: $title, completed: $completed) { ...TodoFields }
  }
  ${fragments.todo}
`

const createTodoOptions = {
  props: ({ mutate, ownProps: { data: { refetch } } }) => ({
    onSave: async title => {
      await mutate({ variables: { title } })
      refetch()
    }
  })
}

export default compose(
  graphql(allTodos),
  graphql(createTodo, createTodoOptions)
)(AddTodo)
