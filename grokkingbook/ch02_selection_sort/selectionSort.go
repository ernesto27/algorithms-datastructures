package main

import "fmt"

func findSmallest(array []int) int {
	smallest := array[0]
	smallestIndex := 0

	for index, value := range array {
		if value < smallest {
			smallest = value
			smallestIndex = index
		}
	}
	return smallestIndex
}

func selectionSort(array []int) {
	// newArr := [5]int{}
	var newArray [5]int
	// fmt.Println(newArray)
	for index := range array {
		// fmt.Println(value)
		smallestIndex := findSmallest(array)

		newArray[index] = array[smallestIndex]

		array[smallestIndex] = array[len(array)-1] // Copy last element to index i.
		array[len(array)-1] = 0                    // Erase last element (write zero value).
		array = array[:len(array)-1]               // Truncate slice.
	}

	fmt.Println(newArray)
}

func main() {
	array := []int{5, 3, 1, 2, 11}
	selectionSort(array)
	// fmt.Println(findSmallest(array))
}
