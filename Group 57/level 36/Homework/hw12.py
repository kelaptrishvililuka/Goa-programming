# 12) მომხმარებელს შეეკითხეთ რიცხვი შემდეგ შექმენით ფუნქცია რომელსაც ექნება პარამეტრი რომელსაც არგუმენტად გადაეცემა მომხლარებლის შემოტანილი რიცხვი შემდეგ კი ერთიდან იმ რიცხვამდე დაბეჭდავს ყველა კენტ რიცხვს.

x = int(input("Enter Numbers: "))

def Odd(num):
    for i in range(1, num + 1,2):
        print(i)

Odd(x)