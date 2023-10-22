def single_letter_count(word, letter):
        
    x = word.lower().count(letter)

    return x 

    """How many times does letter appear in word (case-insensitively)?
    
        >>> single_letter_count('Hello World', 'h')
        1
        
        >>> single_letter_count('Hello World', 'z')
        0
        
        >>> single_letter_count("Hello World", 'l')
        3
    """

seeResult = single_letter_count('natalie', 'a')

print(seeResult)
