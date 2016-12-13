defmodule TodoApp.LayoutView do
  use TodoApp.Web, :view

  @asset_manifest "priv/static/asset-manifest.json"
    |> File.read!
    |> Poison.Parser.parse!

  def client_path do
    case Application.get_env(:todo_app, TodoApp.LayoutView) do
      [client_path: client_path] -> client_path
      _ -> @asset_manifest["main.js"]
    end
  end

  def styles_path do
    case Application.get_env(:todo_app, TodoApp.LayoutView) do
      [styles_path: styles_path] -> styles_path
      _ -> @asset_manifest["main.css"]
    end
  end
end
