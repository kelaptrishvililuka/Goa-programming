# 3) შექმენით ლისტი სადაც გექნებათ 1-10 ჩათვლით რიცხვები, დაპრინტეთ ყველა რიცხვი მაგრამ მიუწერეთ რომელია კენტი და რომელია ლუწი.

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for number in numbers:
    if number % 2 == 0:
        print(number, "even")
    else:
        print(number, "odd")