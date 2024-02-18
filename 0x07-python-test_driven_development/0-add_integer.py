#!/usr/bin/python3
""" Add two numbers"""


def add_integer(a, b=98):
    """
    Add two numbres
    args:
        a (int or float): the first number
        b (int or float): the second number

        Returns:
            int or float the product of a and b

        Raises:
            TypeError: If a or b is not integer or float.
    """

    if not isinstance(a, (int, float)):
        raise TypeError("a must be an integer")
    if not isinstance(b, (int, float)):
        raise TypeError("b must be an integer")
    return int(a) + int(b)


if __name__ == "__main__":
    import doctest
    doctest.testfile("test/0-add_integer.txt")
