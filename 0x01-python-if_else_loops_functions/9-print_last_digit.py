#!/usr/bin/python3
def print_last_digit(number):
    number = abs(number)
    last_digit = number % 10
    print(f"the last digit of {number} is {last_digit}")
    return last_digit
