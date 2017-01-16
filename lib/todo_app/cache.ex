defmodule TodoApp.Cache do
  @moduledoc """
  Global key value cache.
  """

  use GenServer

  def start_link do
    GenServer.start_link(__MODULE__, %{}, name: __MODULE__)
  end

  def get(key) do
    GenServer.call(__MODULE__, {:get, key})
  end

  def get(key, resolver) do
    case GenServer.call(__MODULE__, {:get, key}) do
      {:ok, value} -> {:ok, value}
      {:error, :not_found} ->
        set(key, resolver.())
        get(key)
    end
  end

  def set(key, value) do
    GenServer.call(__MODULE__, {:set, key, value})
  end

  def handle_call({:get, key}, _from, state) do
    case state[key] do
      nil -> {:reply, {:error, :not_found}, state}
      value -> {:reply, {:ok, value}, state}
    end
  end

  def handle_call({:set, key, value}, _from, state) do
    {:reply, :ok, Map.put(state, key, value)}
  end
end
