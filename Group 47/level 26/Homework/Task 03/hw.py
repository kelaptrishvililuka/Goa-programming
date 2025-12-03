# 3) def-ის გამოყენბით შემქენით ფუქნცია even_or_odd() შევამოწმოთ ჩვენი გამდოცემული არგუმენტი/ მაგალითილითად even_or_odd(23) არის თუ არა კენტი თუ არის დვაწეროთ "კი არის კენტი" თუ არა "არ არის კენტი"
# ***hard level***

def even_or_odd(number):
    if number % 2 == 0:
        print("is not odd")
    else:
        print("Yes, it is odd")