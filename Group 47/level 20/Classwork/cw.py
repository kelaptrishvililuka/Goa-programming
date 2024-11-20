# numb = [1, 23, 4, 5, 5, 6, 6, 1212312, 31, 4, 5, 12, 3]
# for i in range(len(numb)):
#     if numb[i] % 2 != 0:  # If the number is odd
#        numb[i] = "odd"      
#    print(numb[i])  


number = [1, 23, 4, 5, 5, 6, 6, 1212312, 31, 4, 5, 12, 3]

for i in range(len(number)):
    if number[i] % 2 != 0:
        number[i] = "odd"
    else:
        number[i] = number[i]

print(number)