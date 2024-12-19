# 3) მომხმარებელს შემოატანინეთ რიცხვი, შემდეგ კი დაბეჭდეთ ერთიდან ამ რიცხვამდე მხოლოდ ლუწი რიცხვების ჯამი ცალკე და მხოლოდ კენტი რიცვხების ჯამი ცალკე, გამოიყენეთ for loop.

l = int(input("enter number: "))

even_sum = 0
odd_sum = 0

for i in range(1, l + 1):
    if i % 2 == 0: 
        even_sum += i
    else:
        odd_sum += i
        
print("sum of even numbers:", even_sum)
print("sum of odd numbers:", odd_sum)