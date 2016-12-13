defmodule TodoApp.LayoutView do
  use TodoApp.Web, :view

  def bundle_path do
    Application.get_env(:todo_app, TodoApp.LayoutView)[:bundle_path]
  end
end
