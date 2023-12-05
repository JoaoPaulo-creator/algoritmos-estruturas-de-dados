package main

import (
	"fmt"
	"math"
)

func binarySearch(arr []int, target int) int {
	low := arr[0]
	high := arr[len(arr)-1]

	for low < high {
		mid := math.Floor(float64(low+high) / 2)
		midToInt := int(mid)

		if arr[midToInt] == target {
			return midToInt
		} else if arr[midToInt] < target {
			low = midToInt - 1
		} else {
			high = midToInt + 1
		}
	}
	return -1
}

func main() {
	arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9}
	n := binarySearch(arr, 4)

	fmt.Println(n)

}
