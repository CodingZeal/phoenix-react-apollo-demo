defmodule TodoApp.LandingPageTest do
  use TodoApp.AcceptanceCase, async: true

  test "loads the phoenix landing page", %{session: session} do
    greeting =
      session
      |> visit("/")
      |> find("h4")
      |> text

    assert greeting == "Welcome!"
  end
end
