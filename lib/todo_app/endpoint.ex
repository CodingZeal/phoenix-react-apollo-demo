defmodule TodoApp.Endpoint do
  use Phoenix.Endpoint, otp_app: :todo_app

  if Mix.env == :prod do
    case File.read("priv/static/asset-manifest.json") do
      {:ok, content } ->
        json = Poison.Parser.parse!(content)
        Application.put_env(:todo_app, TodoApp.LayoutView, json)
      _ ->
        :noop
    end
  end

  if Application.get_env(:todo_app, :sql_sandbox) do
    plug Phoenix.Ecto.SQL.Sandbox
  end

  socket "/socket", TodoApp.UserSocket

  # Serve at "/" the static files from "priv/static" directory.
  #
  # You should set gzip to true if you are running phoenix.digest
  # when deploying your static files in production.
  plug Plug.Static,
    at: "/", from: :todo_app, gzip: false,
    only: ~w(static favicon.ico robots.txt)

  # Code reloading can be explicitly enabled under the
  # :code_reloader configuration of your endpoint.
  if code_reloading? do
    plug Phoenix.CodeReloader
  end

  plug Plug.RequestId
  plug Plug.Logger

  plug Plug.Parsers,
    parsers: [:urlencoded, :multipart, :json],
    pass: ["*/*"],
    json_decoder: Poison

  plug Plug.MethodOverride
  plug Plug.Head

  # The session will be stored in the cookie and signed,
  # this means its contents can be read but not tampered with.
  # Set :encryption_salt if you would also like to encrypt it.
  plug Plug.Session,
    store: :cookie,
    key: "_todo_app_key",
    signing_salt: "Iamlfiz0"

  plug TodoApp.Router
end
