defmodule TodoApp.Schema do
  use Absinthe.Schema
  alias TodoApp.Resolver

  import_types TodoApp.Schema.Types

  query do
    @desc "All Todos"
    field :todos, list_of(:todo) do
      resolve &Resolver.Todo.all/3
    end

    @desc "Find a Todo by it's id"
    field :todo, :todo do
      arg :id, non_null(:id)
      resolve &Resolver.Todo.find/3
    end
  end

  mutation do
    @desc "Create a new Todo"
    field :todo, type: :todo do
      arg :title, non_null(:string)
      arg :completed, :boolean
      resolve &Resolver.Todo.create/3
    end
  end
end
