# 9) მომხმარებელს შეეკითხეთ რიცხვი შემდეგ შექმენით ფუნქცია რომელსაც ექნება პარამეტრი რომელსაც არგუმენტად გადაეცემა მომხლარებლის შემოტანილი რიცხვი შემდეგ კი თუ 18 ზე უთხრას რომ სრულწლოვანია თუარადა არარის.

x = int(input("Enter Your Age: "))

def age(num):
    if num >= 18:
        print("Your age: " + str(num) + " You are adult")
    else:
        print("Your age: " + str(num) + " You are not adult")

age(x)