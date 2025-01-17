# 4) შექმენით ლისტი სადაც გექნებათ 1-10 ჩათვლით რიცხვები, შეამოწმეთ რიცხვი ლუწია თუ კენტი და თუ ლუწია დაამატეთ ახალ ლისტში.

num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = []

for i in range(len(num)):
    if num[i] % 2 == 0:
        even_numbers.append(i)

print(even_numbers)