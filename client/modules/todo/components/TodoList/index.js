import React from "react";
import { themr } from "react-css-themr";
import ProgressBar from "react-toolbox/lib/progress_bar/ProgressBar";
import { compose } from "react-apollo";

import Todo from "../../components/Todo";

import container from "./container";
import todoListTheme from "./theme.scss";

function TodoList({ data: { loading, todos }, theme, deleteTodo, updateTodo }) {
  if (loading) return <Loading theme={theme} />;

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
  );
}

function Loading({ theme }) {
  return (
    <div className={theme.todoList}>
      <ProgressBar type="circular" mode="indeterminate" />
    </div>
  );
}

export default compose(container, themr("", todoListTheme))(TodoList);
