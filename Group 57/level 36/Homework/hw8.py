# 8) მომხმარებელს შეეკითხეთ რიცხვი შემდეგ შექმენით ფუნქცია რომელსაც ექნება პარამეტრი რომელსაც არგუმენტად გადაეცემა მომხლარებლის შემოტანილი რიცხვი შემდეგ კი დაბეჭდავს ეს რიცხვი დადებითია თუ უარყოფითი.

x = int(input("Enter num: "))

def numbers(num):
    if num > 0:
        print("Result: " + str(num) + " Positive")
    elif num == 0:
        print("Result: " + str(num) + " Equal to 0")
    else:
        print("Result: " + str(num) + " Negative")

numbers(x)