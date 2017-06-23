import { gql, graphql, compose } from "react-apollo";

import { allTodos, fragments } from "../TodoList/container";

const createTodo = gql`
  mutation createTodo($title: String, $completed: Boolean) {
    createTodo(title: $title, completed: $completed) { ...TodoFields }
  }
  ${fragments.todo}
`;

const createTodoOptions = {
  props: ({ mutate, ownProps: { data: { refetch } } }) => ({
    onSave: async title => {
      await mutate({ variables: { title } });
      refetch();
    }
  })
};

export default compose(
  graphql(allTodos),
  graphql(createTodo, createTodoOptions)
);
