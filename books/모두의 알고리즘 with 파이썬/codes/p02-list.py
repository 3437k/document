# 최대값 찾기, 시간복잡도 O(n)
# 만약 정렬 후 마지막 값 list[-1]을 구하는 방법의 경우는 코드가 직관적이지만 시간복잡도는 O(n log n) 입니다. 
# 리니어 시간 복잡도 O(n), 입력 크기가 두 배가 되면 실행 시간도 대략 두 배 입니다. 
def find_max(lst):
    max = lst[0]
    
    # 간략하게 변경 
    # for i in range(1, len(lst)):, if max < lst[i]:
    
    for value in lst:
        if max < value:
            max = value
    return max


print(find_max([1, 2, 3, 4, 5]))
print(find_max([11, 55, 22]))

def find_max_index(lst):
    n = len(lst)            
    max_idx = 0
    for i in range(1, n):
        if lst[max_idx] < lst[i]:
            max_idx = i
    return max_idx

print(find_max_index([1, 2, 3, 4, 5]))