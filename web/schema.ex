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

  mutation do
    field :todo, type: :todo do
      arg :title, non_null(:string)
      arg :completed, :boolean

      resolve fn args, _ ->
        %Todo{}
        |> Todo.changeset(args)
        |> Repo.insert
      end
    end
  end

  object :todo do
    field :id, :id
    field :title, :string
    field :completed, :boolean
  end
end
