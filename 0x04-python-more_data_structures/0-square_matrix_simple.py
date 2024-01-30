#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    array_matrix = []
    for i in matrix:
        array_matrix.append([x**2 for x in i])
    return array_matrix
