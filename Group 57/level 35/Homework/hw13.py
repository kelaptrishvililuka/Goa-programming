# 13) შექმენით ფუნქცია რომელშიც იქნება რიცხვებით სავსე სია შემდეგ კი დაბეჭდავს ამ სიაში არსებული რიცხვების ჯამს.

def sum_of_numbers_in_list():
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    total_sum = 0

    i = 0
    while i < len(numbers):
        total_sum += numbers[i]
        i += 1
    
    result = "Sum of numbers: " + str(total_sum)
    print(result)

sum_of_numbers_in_list()