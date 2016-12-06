defmodule TodoApp.Repo.Migrations.CreateTodo do
  use Ecto.Migration

  def change do
    create table(:todos) do
      add :title, :string
      add :completed, :boolean, default: false, null: false

      timestamps()
    end
  end
end
