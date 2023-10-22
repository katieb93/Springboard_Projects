def sum_range(nums, start=0, end=None):

    total = sum(range(start, end))

    return total 

nums = [1, 2, 3, 4]
x = sum_range(nums)

print(x)

"""Return sum of numbers from start...end.

    total = sum(range(start, stop))
    - start: where to start (if not provided, start at list start)
    - end: where to stop (include this index) (if not provided, go through end)

        >>> nums = [1, 2, 3, 4]

        >>> sum_range(nums)
        10

        >>> sum_range(nums, 1)
        9

        >>> sum_range(nums, end=2)
        6

        >>> sum_range(nums, 1, 3)
        9

    If end is after end of list, just go to end of list:

        >>> sum_range(nums, 1, 99)
        9
    """
