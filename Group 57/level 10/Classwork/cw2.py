# 2) მომხამრებელს შემოატანინეთ ახლანდელი ასაკი ასევე შემოატანინეთ ახლანდელი წელი, შემდეგ შეეკითხეთ რამდენი წლით სურს დროში მოგზაურობა შემდეგ კი დაბეჭდეთ ერთ გრძელ წინადადებაში რამდენი წლის იქნება მომხარებელი დროში მოგზაურობის შემდეგ და რომელი წელიწადი იქნება დროში მოგზაურობის შემდეგ.

current_age = int(input("Enter Your Age "))
current_year = int(input("Enter current year: "))

time_travel = int(input("for how many years, do you want to travel in time: "))

print("დროში მოგზაურობის შემდეგ შენ იქნები " + str(current_age + time_travel) + "წლის დროში მოგზაურობის შემდეგ შენ მოხვდები " + str(current_year + time_travel) + " წელში")