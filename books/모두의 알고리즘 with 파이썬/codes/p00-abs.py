import math

def abs_sign(n):
    # sign
    if n >= 0:
        return n
    else:
        return -n


def abs_sqrt(n):  
    # square
    s = n * n      

    # square root    
    return math.sqrt(s)

print(abs_sign(5))
print(abs_sign(-1))    
print(abs_sqrt(25))
print(abs_sqrt(-9))    