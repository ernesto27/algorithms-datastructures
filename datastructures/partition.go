package main

import "fmt"

func defPartition(array []int, leftPointer int, rigthPointer int) {
	var pivotPosition int = rigthPointer
	var pivot int = array[pivotPosition]

	rigthPointer--

	for {
		// fmt.Print("loop", pivo)
		for array[leftPointer] < pivot {
			leftPointer++
		}

		for array[rigthPointer] > pivot {
			rigthPointer--
		}

		if leftPointer >= rigthPointer {
			break
		} else {
			array = swap(array, leftPointer, rigthPointer)
		}
	}
	array = swap(array, leftPointer, pivotPosition)
	fmt.Println(array)
}

func swap(array []int, pointer1 int, pointer2 int) []int {
	var tempValue int = array[pointer1]
	array[pointer1] = array[pointer2]
	array[pointer2] = tempValue
	return array
}

func main() {
	array := []int{0, 5, 2, 1, 6, 3}
	defPartition(array, 0, len(array)-1)
}
