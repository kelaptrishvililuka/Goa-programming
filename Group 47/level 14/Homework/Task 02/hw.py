# 2) მომხარებელს შეეკითხეთ საიდან-სადამდე უნდა დავაწეროთ for loop ის გამოყენებით რიცხვების დიაპაზონი ანუ (range)
# შემდეგ თუ ეს ციფრები იქნებიან 2-სა და(and)  3-ს ჯერადები დაგვიპრინტოს:
# "ეს ციფრები არის 3-ისა და 2-ის ჯერადები"
# თუ არა:
# რაც გინდათ ის პატრინტეთ <3 

for_loop_range = int(input("enter for loop range:"))
for i in range(1, for_loop_range):
    if i % 2 == 0 and i % 3 == 0:
        print("The number is a multiple of 2 and 3")
    else:
        print("The number is not a multiple of 2 and 3") 