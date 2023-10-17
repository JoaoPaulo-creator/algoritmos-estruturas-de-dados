// este metodo utiliza de loops
// um array sorted eh utilizado como input

/**
Let us do discuss the working of two pointer algorithm in brief which is as follows. The algorithm basically uses the fact that the input array is sorted. We start the sum of extreme values (smallest and largest) and conditionally move both pointers. We move left pointer ‘i’ when the sum of A[i] and A[j] is less than X. We do not miss any pair because the sum is already smaller than X. Same logic applies for right pointer j.
@see https://www.geeksforgeeks.org/two-pointers-technique/
*/

package main

import "fmt"

func isPairSum_(arr []int, n, X int) int {

	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			if i == j {
				continue
			}

			if arr[i]+arr[j] == X {
				return 1
			}

			if arr[i]+arr[j] > X {
				break
			}

		}
	}
	return 0
}

func main_() {

	arr := []int{2, 3, 5, 8, 9, 10, 11}
	val := 17

	result := isPairSum_(arr, len(arr), val)

	fmt.Println("The final result is: ", result)

}
