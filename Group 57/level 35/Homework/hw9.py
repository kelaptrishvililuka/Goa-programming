# 9) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება ასაკს თუ მისი ასაკი მეტია 18 ზე უთხრას რომ სრულწლოვანია თუარადა არარის.

def check_adult_or_minor():
    age = int(input("Enter Your Age: "))
    if age >= 18:
        print("You are an adult")
    else:
        print("You are not an adult")

check_adult_or_minor()