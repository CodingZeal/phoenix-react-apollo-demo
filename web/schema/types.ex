defmodule TodoApp.Schema.Types do
  use Absinthe.Schema.Notation

  @desc "A Todo"
  object :todo do
    field :id, :id
    field :title, :string
    field :completed, :boolean
  end
end
