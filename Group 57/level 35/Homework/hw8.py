# 8) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება რიღხვს შემდეგ კი დაბეჭდავს დადებითია თუ უარყოფითი.

def check_positive_or_negative():
    x = int(input("Enter a Number: "))
    if x > 0:
        print("Positive")
    elif x == 0:
        print("Zero")
    else:
        print("Negative")

check_positive_or_negative()