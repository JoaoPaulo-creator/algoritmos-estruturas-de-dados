package main

import "fmt"

func merge(arr []int, left, m, right int) {
	n1 := m - left + 1
	n2 := right - m

	if n1 <= 0 || n2 <= 0 {
		return
	}

	Left := make([]int, n1)
	Right := make([]int, n2)

	for i := 0; i < n1; i++ {
		Left[i] = arr[left+i]
	}

	for j := 0; j < n2; j++ {
		Right[j] = arr[m+1+j]
	}

	i := 0
	j := 0
	k := left

	for i < n1 && j < n2 {
		if Left[i] <= Right[j] {
			arr[k] = Left[i]
			i++
		} else {
			arr[k] = Right[j]
			j++
		}
		k++
	}

	for i < n1 {
		arr[k] = Left[i]
		i++
		k++
	}

	for j < n2 {
		arr[k] = Right[j]
		j++
		k++
	}
}

func mergeSort(arr []int, left, right int) {
	if left >= right {
		return
	}

	m := left + (right-left)/2

	mergeSort(arr, left, m)
	mergeSort(arr, m+1, right)
	//mergeando as metades organizadas/"sortadas"
	merge(arr, left, m, right)

}

func main() {
	arr := []int{201, 309, -4, 12, 11, 13, 5, 6, 7, 100}
	fmt.Println("unsorted array: ", arr)
	mergeSort(arr, 0, len(arr)-1)
	fmt.Println("sorted array: ", arr)
}
