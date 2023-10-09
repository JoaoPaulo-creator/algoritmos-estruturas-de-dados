//Multiplicação de cadeia de matrizes (ou problema da ordenação de cadeia de matrizes) é um problema de otimização que pode ser resolvido usando programação dinâmica. Dada uma sequência de matrizes, o objetivo é encontrar a forma mais eficiente de multiplicar essas matrizes. O problema não é na realidade para realizar a multiplicação, mas apenas para decidir a sequência de multiplicações das matrizes envolvidas.
//
//
//
//
//

package main

import (
	"fmt"
	"math"
)

func MatrixChainOrder(p []int, i int, j int) int {
	if i == j {
		return 0
	}

	min := math.MaxInt16

	for k := i; k < j; k++ {
		count := MatrixChainOrder(p, i, k) + MatrixChainOrder(p, k+1, j) + p[i-1]*p[k]*p[j]

		if count < min {
			min = count
		}
	}

	return min

}

func main() {
	arr := []int{1, 2, 3, 4, 3}

	n := len(arr)
	fmt.Println("Minimo numero de multiplicacoes eh: ", MatrixChainOrder(arr, 1, n-1))

}
