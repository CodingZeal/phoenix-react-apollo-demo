defmodule TodoApp.PageController do
  use TodoApp.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
