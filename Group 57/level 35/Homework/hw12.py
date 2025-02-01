# 12) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება რიცხვს შემდეგ კი ერთიდან იმ რიცხვამდე დაბეჭდავს ყველა კენტ რიცხვს.

def print_odd_numbers():
    num = int(input("Enter a number: "))
    
    i = 1
    while i <= num:
        print(i)
        i += 2

print_odd_numbers()