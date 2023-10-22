def is_palindrome(phrase):

    phraseCheck = phrase[::-1]

    if phraseCheck == phrase:
        print("Yes")
    else:
        print("No")

is_palindrome('noon')
is_palindrome('snap')





"""Is phrase a palindrome?

    Return True/False if phrase is a palindrome (same read backwards and
    forwards).

        >>> is_palindrome('tacocat')
        True

        >>> is_palindrome('noon')
        True

        >>> is_palindrome('robert')
        False

    Should ignore capitalization/spaces when deciding:

        >>> is_palindrome('taco cat')
        True

        >>> is_palindrome('Noon')
        True
    """