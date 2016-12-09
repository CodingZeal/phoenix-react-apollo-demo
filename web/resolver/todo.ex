defmodule TodoApp.Resolver.Todo do
  alias TodoApp.{Repo, Todo}
  import Ecto.Query, only: [order_by: 2]

  def all(_parent, _args, _info) do
    {:ok, Todo |> order_by(desc: :inserted_at) |> Repo.all}
  end

  def create(_parent, args, _info) do
    changeset = Todo.changeset(%Todo{}, args)

    case Repo.insert(changeset) do
      {:ok, todo} -> {:ok, todo}
      {:error, changeset} -> {:error, changeset.errors}
    end
  end

  def delete(_parent, %{id: id}, _info) do
    todo = Repo.get(Todo, id)

    if todo == nil do
      {:error, 'todo not found' }
    else
      case Repo.delete(todo) do
        {:ok, todo} -> {:ok, todo}
        {:error, changeset} -> {:error, changeset.errors}
      end
    end
  end

  def find(_parent, %{id: id}, _info) do
    {:ok, Todo |> Repo.get(id)}
  end

  def update(_parent, args, _info) do
    changeset = Todo |> Repo.get(args.id) |> Todo.changeset(args)

    case Repo.update(changeset) do
      {:ok, todo} -> {:ok, todo}
      {:error, changeset} -> {:error, changeset.errors}
    end
  end
end
