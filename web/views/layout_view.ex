defmodule TodoApp.LayoutView do
  @moduledoc """
  Provides helpers for accessing static assets in multiple environments.
  """

  use TodoApp.Web, :view

  def client_path do
    :todo_app
    |> Application.get_env(TodoApp.LayoutView)
    |> Keyword.fetch(:client_path)
    |> case do
      {:ok, client_path} -> client_path
      _ -> asset_manifest["main.js"]
    end
  end

  def styles_path do
    :todo_app
    |> Application.get_env(TodoApp.LayoutView)
    |> Keyword.fetch(:styles_path)
    |> case do
      {:ok, styles_path} -> styles_path
      _ -> asset_manifest["main.css"]
    end
  end

  def asset_manifest do
    resolve = fn ->
      case File.read("priv/static/asset-manifest.json") do
        {:ok, content} -> Poison.Parser.parse!(content)
        _ -> nil
      end
    end

    case TodoApp.Cache.get(:manifest, resolve) do
      {:ok, manifest} -> manifest
      _ -> %{}
    end
  end
end
