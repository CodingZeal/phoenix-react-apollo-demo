defmodule TodoApp.Schema do
  use Absinthe.Schema
  alias TodoApp.{Repo, Todo}

  query do
    field :items, list_of(:item) do
      resolve fn _, _ ->
        {:ok, Todo |> Repo.all}
      end
    end

    field :item, :item do
      arg :id, non_null(:id)
      resolve fn %{id: item_id}, _ ->
        {:ok, Todo |> Repo.get(item_id)}
      end
    end
  end

  object :item do
    field :id, :id
    field :title, :string
    field :completed, :boolean
  end
end
