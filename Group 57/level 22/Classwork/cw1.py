# 1)  მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი ერთიდან მომხმარებლის შემოტანილ რიცხვამდე დაბეჭდეთ ყველა რიცხვის ჯამი, for loop ის გამოყენებით.

ran = int(input("Enter Your Number: "))

sum = 0

for i in range(ran):
    sum += i

print(sum)    