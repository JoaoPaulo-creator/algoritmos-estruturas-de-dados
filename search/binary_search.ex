defmodule Ok do
  def search(list, target) do
    binary_search(list, target, 0, length(list) - 1)
  end

  defp binary_search(list, target, low, high) do
    if low <= high do
      mid = div(low + high, 2)

      case Enum.at(list, mid) do
        ^target -> true
        x when x > target -> binary_search(list, target, low, mid - 1)
        _ -> binary_search(list, target, mid + 1, high)
      end
    else
      false
    end
  end
end

defmodule Optimal do
  def search(list, target), do: binary_search(list, target, 0, length(list) - 1)

  defp binary_search(list, target, low, high) do
    if low <= high do
      mid = div(low + high, 2)

      case Enum.at(list, mid) do
        ^target -> true
        x when x > target -> binary_search(list, target, low, mid - 1)
        _ -> binary_search(list, target, mid + 1, high)
      end
    else
      false
    end
  end
end
