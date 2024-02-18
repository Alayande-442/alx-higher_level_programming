#!/usr/bin/python3
"""module for print_square """


def print_square(size):
    """A function to print square

    Args:
        size: The size of the square

    Raises:
        TypeError: The value of size must be an integer
        ValueError: The value of size must be greater than or eqauls 0
        TypeError: The size must not be a float less than zero
    """

    if not isinstance(size, int):
        raise TypeError("size must be an integer")

    if size < 0:
        raise ValueError("size must be >= 0")
    print((("#" * size + "\n") * size), end="")


if __name__ == "__main__":
    import doctest
    doctest.testfile("tests/4-print_square.txt")
