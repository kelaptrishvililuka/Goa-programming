# 5) input ები გამოყენებით, დავამტოთ იმდენი სიტყვა რმადენიც მომხარებეს სურს და ეს სიტყვეი მოვაქციოთ array ში 
# დავაჯოინოთ და გამოვიტანოთ ტერმინალში

input_string = input("enter words: ")

words = input_string.split()  

result = " ".join(words)

print("combined words: ", result)