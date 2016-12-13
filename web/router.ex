defmodule TodoApp.Router do
  use TodoApp.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  forward "/graphql", Absinthe.Plug, schema: TodoApp.Schema
  forward "/graphiql", Absinthe.Plug.GraphiQL, schema: TodoApp.Schema

  scope "/api", TodoApp do
    pipe_through :api
  end

  scope "/", TodoApp do
    pipe_through :browser

    get "/*path", PageController, :index
  end
end
