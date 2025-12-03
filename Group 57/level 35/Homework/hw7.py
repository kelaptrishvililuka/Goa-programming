# 7) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება რიცხვს შემდეგ კი დაბეჭდავს ეს რიცხვი ლუწია თუ კენტი.

def even_or_odd():
    x = int(input("Enter a Number: "))
    if x % 2 == 0:
        print("Even")
    else:
        print("Odd")

even_or_odd()