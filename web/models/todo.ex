defmodule TodoApp.Todo do
  use TodoApp.Web, :model

  schema "todos" do
    field :title, :string
    field :completed, :boolean, default: false

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:title, :completed])
    |> validate_required([:completed])
  end
end
