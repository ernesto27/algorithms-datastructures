def binary_search(input_array, value):
    """Your code goes here."""
    left = 0
    rigth = len(input_array) - 1
    
    while left <= rigth:
        mid = (left + rigth) // 2
        curr = input_array[mid]
    
        if curr == value:
            return mid
        elif value > curr:
            left = mid + 1
        else:
            rigth = mid - 1
        
    return -1

test_list = [1,3,9,11,15,19,29]
test_val1 = 25
test_val2 = 15
print (binary_search(test_list, test_val1))
print (binary_search(test_list, test_val2))