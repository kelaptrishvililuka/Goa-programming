#  2) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი ერთიდან ამ რიცხვამდე დაბეჭდეთ რიცხვების საშუალო არითმეტიკული

ran = int(input("Enter Your Number: "))

sum = 0

for i in range(1, ran + 1):
    sum += i
    
print(sum / ran)