# 1) split() ფუნქიცია დაწერეთ split() ფუნქციის გარეშე

text = "Hello world!,its me luka"
result = []
word = ""

for char in text:
    if char == " ": 
        if word:  
            result.append(word)
            word = ""  
    else:
        word += char  

if word:  
    result.append(word)

print(result)  