package main

import "fmt"

func swap(a *int, b *int) {
	t := *a
	*a = *b
	*b = t
}

func partition(array []int, left int, right int) int {
	pivot := array[right]

	i := left - 1

	for j := left; j < right; j++ {
		if array[j] <= pivot {
			i++

			swap(&array[i], &array[j])
		}
	}
	swap(&array[i+1], &array[right])
	return i + 1
}

func quickSort(array []int, left int, right int) {
	if left < right {
		pi := partition(array, left, right)

		quickSort(array, left, pi-1)
		quickSort(array, pi+1, right)
	}
}

func main() {
	data := []int{8, 7, 2, 1, 0, 9, 6}
	dataLength := len(data)

	fmt.Println("unsorted array: ", data)

	quickSort(data, 0, dataLength-1)
	fmt.Println("sorted array: ", data)
}
