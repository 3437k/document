def sum(n):
    result = 0
    for i in range(1, n+1):        
        print(f"sum: {i}+{result} = {i+result}")
        result += i        
    return result

# print(sum(5))    
print(sum(10))    
# print(sum(100))   


def sum_formula(n):
    # / 일반적인 나눗셈(return floating-point number) 10/2 = 5.0
    # // 정수 나눗셈 10//2 = 5
    return n * (n + 1) // 2

print(sum_formula(5))
print(sum_formula(10))


def sum_square(n):
    result = 0
    for i in range(1, n+1):
        result += i*i
    return result


print(sum_square(10))


def sum_square_formula(n):
    return n * (n + 1) * (2 * n + 1) // 6


print(sum_square_formula(10))