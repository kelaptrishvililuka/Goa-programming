# 8) გააკეთეთ Sum Of Odd Numbers. მიზანი: შეკრიბეთ ყველა კენტი რიცხვი და შეინახეთ სიაში შემდეგ ეგ სია დაპრინტეთ 10 ჯერ

num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Odd_num = []

for i in range(len(num)):
    if num[i] % 2 != 0:
        Odd_num += num[i]

print(Odd_num)