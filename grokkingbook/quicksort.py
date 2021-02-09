def quicksort(array):
    if len(array) < 2:
        return array
    else:
        pivot = array[0]
        less = [ for i in array[i:] if i <= pivot]
        greater = [  for i in array[i:] if i > pivot]

        return quicksort(less) + [pivot] + quicksort(greater)
    
print quicksort([10, 5, 2, 3])