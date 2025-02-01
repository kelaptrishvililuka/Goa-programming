# 9) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება ასაკს თუ მისი ასაკი მეტია 18 ზე უთხრას რომ სრულწლოვანია თუარადა არარის.

def check_adult_or_minor():
    age = int(input("Enter your age: "))
    result = "adult" * (age >= 18) + "Not an adult" * (age < 18)
    print(result)

check_adult_or_minor()