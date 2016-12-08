/* @flow */

import { graphql } from 'react-apollo';
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

export default graphql(allTodos)(TodoList)
