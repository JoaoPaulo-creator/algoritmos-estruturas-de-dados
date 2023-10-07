package main

import (
	"errors"
	"fmt"
)

func linearSearch(arr []int16, target int16) (int, error) {
	for i, num := range arr {
		if num == target {
			return i, nil
		}
	}

	return -1, errors.New("Target not found")
}

func main() {
	array := []int16{1, 5, 7, 4, 23, 5, 2}
	result, err := linearSearch(array, 23)

	if err != nil {
		panic(err)
	} else {
		fmt.Println("index do target: ", result)
	}

}
