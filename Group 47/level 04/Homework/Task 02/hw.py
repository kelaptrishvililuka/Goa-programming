# 1)
# შექმენით 2 ცვლადი მაგალითად პირველი და მეორე , input საშვალებით მომხმარებლები შემოაყვანეთ 2 რიცხვი,
# შემდეგ ამ ორი ცვლადის საშვალებით, მათემატიკური ოპერაციები (+ , - , / , * )


first = float(input("Enter the first number: "))
second = float(input("Enter the second number: "))

addition = first + second
subtraction = first - second
multiplication = first * second
division = first / second if second != 0 else "undefined (cannot divide by zero)"
print("Addition:", addition)
print("Subtraction:", subtraction)
print("Multiplication:", multiplication)
print("Division:", division)