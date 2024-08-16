#!/usr/bin/env python3
"""Rotate a 2D matrix"""


def rotate_2d_matrix(matrix):
    """Rotate the 2D matrix 90 degrees clockwise"""
    matrix = matrix[::-1]

    rotated_matrix = [list(row) for row in zip(*matrix)]

    return rotated_matrix


if __name__ == '__main__':
    matrix = [[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]]
    rotate_2d_matrix(matrix)
    print(rotate_2d_matrix(matrix))
