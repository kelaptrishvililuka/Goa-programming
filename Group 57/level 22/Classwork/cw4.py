# 4) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი ერთიდან ამ რიცხვამდე დაბეჭდეთ მხოლოდ 5 ის ჯერადი რიცხვების ჯამი ცალკე და მხოლოდ 3ის ჯერადი რიცხვების ჯამი ცალკე, გამოიყენეთ while loop.

x = int(input("enter number: "))

multiple_of_5_sum = 0
multiple_of_3_sum = 0

i = 1
while i <= x:
    if i % 5 == 0:
        multiple_of_5_sum += i
    if i % 3 == 0:
        multiple_of_3_sum += i
    i += 1 

print("The sum of multiples of 5:")
print("The sum of multiples of 3:")