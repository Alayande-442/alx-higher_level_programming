#!/usr/bin/python3
""" Divide list """


def matrix_divided(matrix, div):
    """
    Divides all element in a list

    Args:
        Matrix: (list of lists)
        div (int or float): the divisor must be an int or float datatype

        Returns:
            list of lists: A matrix  with elements divided by div

        raises:
            TypeError: matrix must be a matrix (list of lists)
            ...        of integers/floats
            TypeError: Each row of the matrix must have the same size
            TypeError: div must be a number
            ZeroDivisionError: division by zero
    """

    if not all(isinstance(row, list) and all(isinstance(element, (int, float))
               for element in row) for row in matrix):
        raise TypeError(
                "matrix must be a matrix (list of lists) of integers/floats"
                )

    if len(set(len(row) for row in matrix)) > 1:
        raise TypeError("Each row of the matrix must have the same size")

    if not isinstance(div, (int, float)):
        raise TypeError("div must be a number")

    if div == 0:
        raise ZeroDivisionError("division by zero")

    res = [[round(element / div, 2) for element in row] for row in matrix]
    return res


if __name__ == "__main__":
    import doctest
    doctest.testfile("tests/2-matrix_divided.txt")

