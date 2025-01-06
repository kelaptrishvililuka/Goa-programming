# 16)შეიყვანეთ რიცხვი და დაბეჭდეთ მისი ყველა წყვილი რიცხვი (მაგალითად, 8 -> 2, 4, 6, 8).

num = int(input("Enter a Number: "))

if num % 2 == 0:
    for i in range(2, num + 1, 2):  # num + 1, რომ მოიცვას თვითონ num, თუ ის წყვილია
        print(i)
else:
    for i in range(1, num, 2):
        print(i)