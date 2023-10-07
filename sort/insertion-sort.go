package main

import "fmt"


func insectionSort(arr []int) []int {
  var i, j, key int

  for i = 1; i < len(arr); i++ {
    key = arr[i]
    j = i - 1

    for j >= 0 && arr[j] > key {
      arr[j + 1] = arr[j]
      j = j - 1
    }

    arr[j + 1] = key
  }

  return arr
}


func main() {
  unsortedArray := []int{12, 11, 13, 5, 6, 1, -2, -556, 3 ,8, 2}
  sorterdArray := insectionSort(unsortedArray)
  fmt.Println(sorterdArray)
}
