# 1. შეეკითხეთ მომხმარებელს მისი წლოვანება და შეინახეთ ის age ცვლადში შემდეგ შეამოწმეთ არის თუ არა მისი წლოვანება 13 ზე დიდი [და] 19 ზე ნაკლები.


age = int(input("please enter your age: "))

if age > 13 and age < 19:
    print("Your age during adolescence (From 13 to 19 years).")
else:
    print("Your age is not in adolescence")