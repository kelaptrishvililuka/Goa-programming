# 9) გამოიყენეთ append და pop რომ დაატრიალოთ ლისტი და დაპრინტეთ შემდეგ.

shopping_list = [1, 2, 3, 4, 5]
reversed_list = []

while shopping_list:
    item = shopping_list.pop()
    reversed_list.append(item)

print(reversed_list)