package main

import "fmt"

func binarySearch(array [10]int, value int) int {
	var lowerBound int = 0
	var upperBound = len(array) - 1

	for lowerBound < upperBound {
		var midPoint int = (upperBound + lowerBound) / 2
		var valueAtMidPoint int = array[midPoint]

		if value < valueAtMidPoint {
			upperBound = midPoint + 1
		} else if value > valueAtMidPoint {
			lowerBound = midPoint - 1
		} else if value == valueAtMidPoint {
			return midPoint
		}
	}

	return 9999999
}

func main() {

	array := [10]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	// fmt.Print((4 + 3) / 2)
	fmt.Print(binarySearch(array, 2))
}
