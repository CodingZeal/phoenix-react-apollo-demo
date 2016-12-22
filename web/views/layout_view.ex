defmodule TodoApp.LayoutView do
  use TodoApp.Web, :view

  def client_path do
    Application.get_env(:todo_app, TodoApp.LayoutView)[:client_path]
  end

  def styles_path do
    Application.get_env(:todo_app, TodoApp.LayoutView)[:styles_path]
  end
end
