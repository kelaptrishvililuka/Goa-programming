# 2)  მომხმარებელს შეეკითხეთ სახელი შემდეგ შექმენით ფუნქცია რომელსაც ექნება ერთი პარატემტრი რომელსაც არგუმენტად გადაეცემა მომხლარებლის შემოტანილი სახელი შემდეგ კი მას მიესალმება.

def hello(name):
    print("hello, " + name)

user_name = str(input("Please, Enter Your Name: "))

hello(user_name)