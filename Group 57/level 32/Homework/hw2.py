# 3) გააკეთეთ Filter Even Numbers. მიზანი: გაფილტრეთ ყველრა ლუწი რიცხვი და ჩაამატეთ ახალ სიაში და შემდეგ ეგ სია დაპრინტეთ 

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = []

i = 0

while i < len(numbers):
    if numbers[i] % 2 == 0:
        even_numbers.append(numbers[i])
    i += 1

print(even_numbers)