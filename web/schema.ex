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
    field :create_todo, type: :todo do
      arg :title, non_null(:string)
      arg :completed, :boolean
      resolve &Resolver.Todo.create/3
    end

    @desc "Delete a Todo"
    field :delete_todo, type: :todo do
      arg :id, non_null(:id)
      resolve &Resolver.Todo.delete/3
    end

    @desc "Update a Todo"
    field :update_todo, type: :todo do
      arg :id, non_null(:id)
      arg :title, :string
      arg :completed, :boolean
      resolve &Resolver.Todo.update/3
    end
  end
end
