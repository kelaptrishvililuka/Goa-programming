# 7) მომხმარებელს შეეკითხეთ რიცხვი შემდეგ შექმენით ფუნქცია რომელსაც ექნება პარამეტრი რომელსაც არგუმენტად გადაეცემა მომხლარებლის შემოტანილი რიცხვი შემდეგ კი დაბეჭდავს ეს რიცხვი ლუწია თუ კენტი.

x = int(input("Enter Num: "))

def even_or_odd(num):
    if num % 2 == 0:
        print( "Result: " + str(num) + "even")
    else:
        print( "Result: " + str(num) + "odd")
    
even_or_odd(x)