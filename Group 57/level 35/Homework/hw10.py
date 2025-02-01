# 10) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება რიცხვს შემდეგ კი ერთიდან იმ რიცხვამდე დაბეჭდავს ყველა რიცხვს.

def print_numbers():
    num = int(input("Enter a number: "))
    
    i = 1
    while i <= num:
        print(i)
        i += 1

print_numbers()