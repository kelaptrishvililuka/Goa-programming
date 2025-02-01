# 5) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება ორ რიცხვს შემდეგ კი მათ გაამრავლებს ერთმანეთზე.

def multiply_two_numbers():
    num1 = int(input("Enter the first number: "))
    num2 = int(input("Enter the second number: "))
    result = num1 * num2
    print("It is the product of both numbers: " + str(result))

multiply_two_numbers()