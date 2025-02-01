# 3) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება ორ რიცხვს შემდეგ კი მათ დაუმატებთ ერთმანეთს.

def add_two_numbers():
    num1 = int(input("Enter the first number: "))
    num2 = int(input("Enter the second number: "))
    result = num1 + num2
    print("The sum of both numbers is: " + str(result))

add_two_numbers()