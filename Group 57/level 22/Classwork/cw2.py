# 2) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი ერთიდან ამ რიცხვამდე დაბეჭდეთ მხოლოდ ლუწი რიცხვების ჯამი, გამოიყენეთ for loop.

k = int(input("enter number: "))

sum_even = 0
for i in range(1, k + 1):
    if i % 2 == 0:
        sum_even += i

print("sum of even numbers: " + str(sum_even))