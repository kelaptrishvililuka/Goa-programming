# 11) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება რიცხვს შემდეგ კი ერთიდან იმ რიცხვამდე დაბეჭდავს ყველა ლუწ რიცხვს.

def print_even_numbers():
    num = int(input("Enter a number: "))
    
    i = 2
    while i <= num:
        print(i)
        i += 2

print_even_numbers()