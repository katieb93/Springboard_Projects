def last_element(lst):

    print("Last element of the input list = ", lst.pop())
    """Return last item in list (None if list is empty.
    
        >>> last_element([1, 2, 3])
        3
        
        >>> last_element([]) is None
        True
    """

    if lst:
        return lst[-1]