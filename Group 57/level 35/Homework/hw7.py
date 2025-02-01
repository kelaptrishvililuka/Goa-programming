# 7) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება რიცხვს შემდეგ კი დაბეჭდავს ეს რიცხვი ლუწია თუ კენტი.

def check_even_or_odd():
    num = int(input("Enter a number: "))
    result = num % 2
    print("Number " + str(num) + " is " + ("Even" * (result == 0)) + ("odd" * (result != 0)))

check_even_or_odd()