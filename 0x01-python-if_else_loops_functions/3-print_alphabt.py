#!/usr/bin/python3  
for alpha_letters in range(ord('a'), ord('z')+1):
    if alpha_letters != 'q' and alpha_letters != 'e':
        print("{:c}".format(alpha_letters), end="")
    
