defmodule QuickSort do
  # retorna um array
  @spec sort([]) :: []
  def sort(arr), do: qs(arr, 0, length(arr) - 1)

  defp qs(arr, low, high) do
    if low < high do
      {arr, pivot_idx} = partition(arr, low, high)
      qs(arr, low, pivot_idx - 1)
      qs(arr, pivot_idx + 1, high)
    else
      arr
    end
  end

  defp partition(arr, low, high) do
    pivot = arr |> Enum.at(high)

    {arr, idx} =
      Enum.reduce_while(low..(high - 1), {arr, low - 1}, fn i, {arr, idx} ->
        if arr |> Enum.at(i) <= pivot do
          new_arr = arr |> swap(idx + 1, i)
          {:cont, {new_arr, idx + 1}}
        else
          {:cont, {arr, idx}}
        end
      end)

    new_arr = arr |> swap(idx + 1, high)
    {new_arr, idx + 1}
  end

  defp swap(arr, i, j) do
    Enum.with_index(arr, fn k, val ->
      cond do
        k == i -> arr |> Enum.at(j)
        k == j -> arr |> Enum.at(i)
        true -> val
      end
    end)
  end
end
