# 8) შექმენით shopping სია სადაც მომხმარებელს შეეძლება რამე ნებისმიერი პროუქტის დამატება და წაშლა, როდესაც მორჩებიან შოპინგს დაუპრინტეთ საბოლოოდ რა შეიძინეს.

shopping = []

while True:
    item = input("what do u want to buy: ")
    shopping.append(item)
    print("what will you add")
    print("Will you continue Yes/No?")
    Answer = input()
    if Answer == "No":
        break
print(shopping)