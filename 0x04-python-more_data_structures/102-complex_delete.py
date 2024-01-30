#!/usr/bin/python3
def complex_delete(a_dictionary, value):
    l_c = a_dictionary.copy()
    for k, v in l_c.items():
        if value == v:
            a_dictionary.pop(k)
    return a_dictionary
