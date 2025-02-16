# 10) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება რიცხვს შემდეგ კი ერთიდან იმ რიცხვამდე დაბეჭდავს ყველა რიცხვს.

def numbers():
    x = int(input("Enter a Number: "))
    for i in range(x + 1):
        print(i)

numbers()