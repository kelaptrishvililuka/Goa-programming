# 13) მომხმარბელს შემოატანინეთ რიცხვი შემდეგ კი მომხმარებლის შემოტანილ რიცხვამდე დაბეჭდეთ მხოლოდ ხუთის ჯერადი რიცხვები.

num = int(input("enter number: "))

for i in range(num):
    if i % 5 == 0:
        print(i)

# print(" ")

# for i in range(num):
#     if i % 3 == 0:
#         print(i)