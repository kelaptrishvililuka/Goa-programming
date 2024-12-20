# 2) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი ერთიდან ამ რიცხვამდე დაბეჭდეთ მხოლოდ ლუწი რიცხვების ჯამი, გამოიყენეთ for loop.

num = int(input("Enter Your Number: "))

sum = 0

for i in range(num):
    if i % 2 == 0:
        sum += i

print(sum)