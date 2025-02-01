# 6) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება ორ რიცხვს შემდეგ კი მათ გაყოფს ერთმანეთზე.

def divide_two_numbers():
    num1 = int(input("Enter the first number: "))
    num2 = int(input("Enter the second number: "))
    result = num1 / num2
    print("The first number is divided by the second number: " + str(result))

divide_two_numbers()