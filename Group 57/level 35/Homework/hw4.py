# 4) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება ორ რიცხვს შემდეგ კი მათ გამოაკლებს ერთმანეთს.

def subtract_two_numbers():
    num1 = int(input("Enter the first number: "))
    num2 = int(input("Enter the second number: "))
    result = num1 - num2
    print("The second number was subtracted from the first number: " + str(result))

subtract_two_numbers()