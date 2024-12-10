# 2) join() ფუნქიცია დაწერეთ join() ფუნქციის გარეშე

words = ["Hello", "world", "this", "is", "Python!"]
separator = " "
result = ""

for i in range(len(words)):
    result += words[i]  
    if i < len(words) - 1:  
        result += separator  

print(result)