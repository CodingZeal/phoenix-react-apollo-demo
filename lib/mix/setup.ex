defmodule Mix.Tasks.TodoApp.Setup do
  use Mix.Task

  def run(_) do
    Mix.Generator.create_file ".env", "BUILD_PATH='priv/static'\n"
  end
end
