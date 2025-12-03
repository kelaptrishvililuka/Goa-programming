# 6)შეამოწმეთ შეყვანილი სიტყვა hello-ა თუ hello world.

word = input("enter hello or hello world: ")


if word == "hello":
    print("It is entered here... hello")

elif word == "hello world":   
    print("It is entered here hello world")

elif word != "hello" or word != "hello world":   
    print("None of the words mentioned above are included here")