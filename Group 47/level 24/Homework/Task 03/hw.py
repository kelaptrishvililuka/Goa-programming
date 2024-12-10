# 3) replace() ფუნქიცია დაწერეთ replace() ფუნქციის გარეშე

def custom_replace(text, old, new):
    parts = text.split(old)  
    return new.join(parts)  

# მაგალითი
text = "I love apples. Apples are tasty."
old = "Apples"
new = "banana"
replaced_text = custom_replace(text, old, new)

print(replaced_text)  