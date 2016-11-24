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

  scope "/", TodoApp do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  forward "/graphql", Absinthe.Plug, schema: TodoApp.Schema

  if Mix.env == :dev do
    forward "/graphiql", Absinthe.Plug.GraphiQL, schema: TodoApp.Schema
  end

  # Other scopes may use custom stacks.
  # scope "/api", TodoApp do
  #   pipe_through :api
  # end
end
