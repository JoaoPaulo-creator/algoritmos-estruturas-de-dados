fun partition(arr: MutableList<Int>, low: Int, high: Int): Int {
    var pivot = arr[high]
    var idx = low - 1

    for(i in low until high) {
        if(arr[i] < pivot) {
            idx++
            val tmp = arr[i]
            arr[i] = arr[idx]
            arr[idx] = tmp
        }

    }
    idx++
    arr[high] = arr[idx]
    arr[idx] = pivot
    return idx
}

fun qs(arr: MutableList<Int>, low: Int, high: Int) {
    if(low >= high) {
        return
    }

    val pivotIdx = partition(arr, low, high)
    qs(arr, 0, pivotIdx - 1)
    qs(arr, pivotIdx + 1,high)

}


fun quickSort(arr: MutableList<Int>): List<Int> {
    qs(arr, 0, arr.size - 1)
    return arr
}

fun main() {
    val unsortedArray = mutableListOf<Int>(100, 4, 1, 5, 9, 0, 3, 34, 56, -4, 2, 201, 404, 99, 67, 26, 18)
    val sortedArray = quickSort(unsortedArray)
    println(sortedArray)
}
