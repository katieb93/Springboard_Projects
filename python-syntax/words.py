def print_upper_words(words, must_start_with):
    """Prints each word in the given list in uppercase, if it starts with one of the letters in must_start_with."""
    for word in words:
        if word[0] in must_start_with:
            print(word.upper())

print_upper_words(["hello", "hey", "goodbye", "yo", "yes"], must_start_with={"h", "y"})