package main

import "fmt"

func fibonacci(n int) int {
	if n <= 2 {
		return 1
	}

	fmt.Println(n)
	return fibonacci(n-1) + fibonacci(n-2)
}

func fibMap(n int) int {
	if n <= 2 {
		return 1
	}

	map_ := make(map[int]int)

	_, exists := map_[n]
	if !exists {
		map_[n] = fibMap(n-1) + fibMap(n-2)
	}

	return map_[n]
}

func main() {
	result := fibMap(10)
	fmt.Println(result)
}
