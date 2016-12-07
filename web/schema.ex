defmodule TodoApp.Schema do
  use Absinthe.Schema
  alias TodoApp.{Repo, Todo}

  query do
    field :todos, list_of(:todo) do
      resolve fn _, _ ->
        {:ok, Todo |> Repo.all}
      end
    end

    field :todo, :todo do
      arg :id, non_null(:id)
      resolve fn %{id: todo_id}, _ ->
        {:ok, Todo |> Repo.get(todo_id)}
      end
    end
  end

  object :todo do
    field :id, :id
    field :title, :string
    field :completed, :boolean
  end
end
