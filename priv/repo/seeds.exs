# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs

alias TodoApp.{Repo, Todo}

Repo.delete_all(Todo)

Repo.insert!(%Todo{title: "Add optimistic updates", completed: false})
Repo.insert!(%Todo{title: "Add tooltip for hotkeys", completed: false})
Repo.insert!(%Todo{title: "Use Phoenix", completed: true})
Repo.insert!(%Todo{title: "Use React", completed: true})
