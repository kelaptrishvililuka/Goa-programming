# 5. Extreme difficulty (თუ იცით ციკლები არ გამოიყენოთ ისინი)
# დაწერეთ პითონის პროგრამა, რომელიც სთხოვს მომხმარებელს ორნიშნა რიცხვს შემდეგ ამოიღებს ამ რიცხვიდან ციფრებს ინდივიდუალურად და დაბეჭდავს ამ ციფრების ჯამს.  (მინიშნება: გამოიყენეთ //, %)

# მომხმარებლისგან მიიღებს ორნიშნა რიცხვს
number = int(input("Enter a two-digit number: "))

# ციფრების გამოყოფა
tens_digit = number // 10       # ათეულის ციფრი
ones_digit = number % 10        # ერთეულების ციფრი

# ციფრების ჯამი
sum_digits = tens_digit + ones_digit

# შედეგის დაბეჭდვა მოხდება
print("ციფრების ჯამი არის: " + (sum_digits))