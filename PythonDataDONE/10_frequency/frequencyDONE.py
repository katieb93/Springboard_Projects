def frequency(lst, search_term):

    x = lst.count(search_term)

    return x 

    """Return frequency of term in lst.
    
        >>> frequency([1, 4, 3, 4, 4], 4)
        3
        
        >>> frequency([1, 4, 3], 7)
        0
    """
seeResult = frequency([1, 4, 3], 7)

print(seeResult)