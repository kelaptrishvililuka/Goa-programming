# 1)  მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი ერთიდან მომხმარებლის შემოტანილ რიცხვამდე დაბეჭდეთ ყველა რიცხვის ჯამი, for loop ის გამოყენებით.

m = int(input("enter number: "))

summation = 0

for i in range(1, m + 1):

    summation += i

print("sum of numbers from one " + str(m) + " is up to " + str(summation))