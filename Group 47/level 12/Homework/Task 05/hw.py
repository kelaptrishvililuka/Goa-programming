# 5) difculty porject ( შექმნით, სარეგისტრაციო ფორმა ჩვენი, სოციალური ქსელისთვის <3 input, while, loop )

print("")

name = input("Enter your name:")
while len(name) < 3:
    print("incorect name!")
    name = input("Enter your name:")

print("")

email = input("Enter your eamil:")
while "@" not in email:
    print("incorect Email!")
    email = input("Enter your eamil:")

print("")

password = input("Enter your password:")
while len(password) < 8:
    print("password must be 8 symbols long!")
    password = input("Enter your password:")

print("")
print("You are registered!")
print("Your name: " + name)
print("Your email: " + email)
print("Your password: " + password)
print("")