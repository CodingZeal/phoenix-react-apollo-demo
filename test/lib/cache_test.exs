defmodule TodoApp.CacheTest do
  use ExUnit.Case, async: true

  alias TodoApp.Cache

  setup do
    Cache.start_link
    :ok
  end

  test "can get and set values by key" do
    :ok = Cache.set(:key, "value")
    assert Cache.get(:key) == {:ok, "value"}
  end

  test "accepts a resolver to handle empty value" do
    assert Cache.get(:something, fn -> "initial" end) == {:ok, "initial"}
    assert Cache.get(:something, fn -> "changed" end) == {:ok, "initial"}
  end
end
