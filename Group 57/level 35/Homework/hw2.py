# 2) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება სახელს შემდეგ კი მას მიესალმება.

def welcome_user():
    name = input("What's your name? ")
    print("Sup, " + name + "! I am glad to talk to you")

welcome_user()