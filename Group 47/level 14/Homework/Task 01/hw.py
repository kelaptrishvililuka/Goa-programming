# 1) შევეკითოხთ მომხმარებელს თავიანთი სახელები, ეს დვამახსოვრებინოთ ცვლადს დახელად (name)
# შევმაქნათ ცვლადი რომელიც დაიამხსოვრებს ცარეიელ სტირნგს (result)
# მომხარებლის სახლის თითოეულ ასოს დაუმატოთ სფეისები example: 
# inp ---> "luka"
# res ---> "l u k a"

name = input("enter your name: ")
result = ""
for i in name:
    result += i + " "
print(result)