#   5) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი ერთიდან ამ რიცხვამდე დაბეჭდეთ ყველა რიცხვის ნამრავლი

ran = int(input("Enter Your Number: "))

sum = 1

for i in range(1, ran + 1):
    sum = sum * i
    
print(sum)   