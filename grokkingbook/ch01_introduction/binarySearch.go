package main

import (
	"errors"
	"fmt"
	"log"
)

func binarySearch(list []int, item int) (int, error) {
	// fmt.Print(list)

	low := 0
	high := len(list) - 1

	for low <= high {
		mid := (low + high) / 2
		guess := list[mid]

		if guess == item {
			return mid, nil
		}

		if guess > item {
			high = mid - 1
		} else {
			low = mid + 1
		}
	}

	return 0, errors.New("Not found number")
}

func main() {
	var list = []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

	result, err := binarySearch(list, 10)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Print(result)

}
