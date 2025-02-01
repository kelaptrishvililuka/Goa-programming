# 1) შექმენით ფუნქცია რომელიც მომხმარებელს მიესალმება.

def greet_user(name):
    print("Hello, " + name + "! How are you?")

user_name = input("Enter Your Name: ")
greet_user(user_name)