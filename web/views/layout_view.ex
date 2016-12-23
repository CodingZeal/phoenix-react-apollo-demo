defmodule TodoApp.LayoutView do
  use TodoApp.Web, :view

  def client_path do
    Application.get_env(:todo_app, TodoApp.LayoutView)
    |> Keyword.fetch(:client_path)
    |> case do
      {:ok, client_path} -> client_path
      _ -> asset_manifest["main.js"]
    end
  end

  def styles_path do
    Application.get_env(:todo_app, TodoApp.LayoutView)
    |> Keyword.fetch(:styles_path)
    |> case do
      {:ok, styles_path} -> styles_path
      _ -> asset_manifest["main.css"]
    end
  end

  defp asset_manifest do
    case File.read("priv/static/asset-manifest.json") do
      {:ok, content} -> Poison.Parser.parse!(content)
      _ -> %{}
    end
  end
end
