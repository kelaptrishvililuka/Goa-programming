# 1)მომხმარებელს შემოატანინეთ თავისი ასაკი და დაუბეჭდეთ, რამდენი წლის იქნება 10 წელში, შემდეგ ეს შედეგი შეინახეთ ცვლადში და გადაიყვანეთ float მონაცემთა ტიპად, საბოლოოდ შეამოწმეთ მისი type

age = int(input("enter your age: "))
new_age = age + 10
print(new_age)
new_age = float(new_age)
print(type(new_age))