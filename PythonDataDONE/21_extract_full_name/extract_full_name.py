def extract_full_names(people):
    newList = list(people.items())
    return newList



names = [
        {'first': 'Ada', 'last': 'Lovelace'},
        {'first': 'Grace', 'last': 'Hopper'},
        ]

x = extract_full_names(names)

print(x)


['Ada Lovelace', 'Grace Hopper']

"""Return list of names, extracting from first+last keys in people dicts.

    - people: list of dictionaries, each with 'first' and 'last' keys for
              first and last names

    Returns list of space-separated first and last names.

        >>> names = [
        ...     {'first': 'Ada', 'last': 'Lovelace'},
        ...     {'first': 'Grace', 'last': 'Hopper'},
        ... ]

        >>> extract_full_names(names)
        ['Ada Lovelace', 'Grace Hopper']
    """