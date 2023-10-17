/**
Dois ponteiros:

  Um esta no inicio do array organizado de forma crescente, e outro esta no fim desse mesmo array.
  Esses pontos vao se movendo para o centro do array, ate se encontrarem.
  Existe um ponteiro que sera mais lento e outro que sera mais rapido
*/

package main

import (
	"fmt"
	"sort"
)

func isPairSum(arr []int, n, x int) int {

	i := 0
	j := n - 1

	for i < j {
		if arr[i]+arr[j] == x {
			return 1
		} else if arr[i]+arr[j] < x {
			i++
		} else {
			j--
		}
	}
	return 0
}

func main() {
	/*
	   para utilizar da tecnica two pointer, o array precisara estar
	   sorted (organizando os numeros de forma crescente)
	*/

	arr := []int{2, 3, 5, 8, 9, 10, 11}
	val := 17

	arrSize := len(arr)
	sort.Ints(arr)

	result := isPairSum(arr, arrSize, val) != 0

	fmt.Println("O resultado eh: ", result)

}
