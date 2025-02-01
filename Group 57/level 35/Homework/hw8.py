# 8) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება რიღხვს შემდეგ კი დაბეჭდავს დადებითია თუ უარყოფითი.

def check_positive_or_negative():

    num = int(input("Enter a number: "))
    result = "Positive" * (num > 0) + "negative" * (num < 0)
    print("The number is: " + result)

check_positive_or_negative()