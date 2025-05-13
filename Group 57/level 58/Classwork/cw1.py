# 2) ნასწავლ მეთდოებზე: lower, upper, capitalize, find გააკეთეთ 3-3 მაგალითი. კომენტარებით დაწერეთ რას აკეთებს თითოეული მეთოდი

text1 = "HELLO WORLD"
print(text1.lower())

text2 = "Python Is FUN"
print(text2.lower())

text3 = "123ABC!@#"
print(text3.lower())
# lower სტრიქონს გარდაქმნის პატარა რეგისტრში

#--------------------------------------------------

text1 = "hello world"
print(text1.upper())

text2 = "Python is fun"
print(text2.upper())

text3 = "abc123!?"
print(text3.upper())
# upper სტრიქონს გარდაქმნის დიდი რეგისტრში

#--------------------------------------------------
text1 = "hello world"
print(text1.capitalize())

text2 = "PYTHON IS FUN"
print(text2.capitalize())

text3 = "123python"
print(text3.capitalize())
# capitalize სტრიქონის პირველ სიმბოლოს გარდაქმნის დიდ რეგისტრში, დანარჩენებს კი პატარა რეგისტრში

#--------------------------------------------------
text1 = "hello world"
print(text1.find("world"))

text2 = "Python is fun"
print(text2.find("is"))

text3 = "apple"
print(text3.find("z"))
# find მეთოდი ეძებს სტრიქონში მოცემულ სიმბოლოს და აბრუნებს მის ინდექსს, თუ ვერ მოიძია აბრუნებს -1-ს