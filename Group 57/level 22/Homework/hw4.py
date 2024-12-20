#  4) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი ერთიდან ამ რიცხვამდე დაბეჭდეთ ყველა რიცხვის ორზე ნამრავლების ჯამი


ran = int(input("Enter Your Number: "))

sum = 0

for i in range(ran):
    sum += (i * 2)
    
print(sum)   