# 1) გააკეთეთ სარეგისტრაციო, მომხმარებელს შემოატანიეთ სახელი და პაროლი, რეგისტრაციის შემდეგ მოხმარებელი უნდა შევიდეს ექაუნთზე, შეეკითხეთ სახელი და პაროლი მომხარებელს რათა შევიდეს ექაუნთზე სანამ მომხმარებელი არ შეიტანს იმ ინფორმაციას რაც შეიყვანა რეგისტრაციის დროს მანამ დაიბეჭდოს რომ შეტანილი ინფორმაცია არასწორია და შეეკითხოს თავიდან, ხოლო თუ მომხმარებელმა ყველაფერი სწორად შეიყვანა დაიბეჭდოს welcome.

print("registration")
reg_name = input("Register Your Name: ")
reg_password = input("Register Your Password: ")


print("Login: ")
log_name = input("Enter Your Name: ")
log_password = input("Enter Your Password: ")

while log_name != reg_name or log_password != reg_password:
    print("incorrect name or password, please try again")
    log_name = input("Please enter correct name: ")
    log_password = input("Enter your password: ")


print("Welcome")