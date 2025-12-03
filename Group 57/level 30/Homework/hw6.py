# 6) მომხმარებელს შემოატანინეთ 5 რიცხვი და დაამატეთ ეს რიცხვები სიაში, ბოლოს გამოიტანეთ ტერმინალში ეს სია.

list = []

i = 0

while i < 5:
    num = int(input("Enter Your Number: "))
    list.append(num)
    i += 1

print(list)      