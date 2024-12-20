# 3) მომხმარებელს შემოატანინეთ რიცხვი, შემდეგ კი დაბეჭდეთ ერთიდან ამ რიცხვამდე მხოლოდ ლუწი რიცხვების ჯამი ცალკე და მხოლოდ კენტი რიცვხების ჯამი ცალკე, გამოიყენეთ for loop.

num = int(input("Enter Your Number: "))

sum = 0

sum2 = 0

for i in range(num):
    if i % 2 == 0:
        sum += i
    if i % 2 != 0:
        sum2 += i

print(sum)
print(sum2)