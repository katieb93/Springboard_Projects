def multiply_even_numbers(nums):

    evens = []

    for num in nums:
        if num % 2 == int:
            evens += num 
    
        result = 1

        for num in evens:

            result = result*num
        
        return result 

x = multiply_even_numbers[1,2,3,4,5,6,7,8,100]

print(x)

"""Multiply the even numbers.
    
        >>> multiply_even_numbers([2, 3, 4, 5, 6])
        48
        
        >>> multiply_even_numbers([3, 4, 5])
        4
        
    If there are no even numbers, return 1.
    
        >>> multiply_even_numbers([1, 3, 5])
        1
    """