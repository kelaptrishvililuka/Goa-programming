# შექმნი სია სადაც იქნება სადაც იანქბა ციფრები რომელიც გამოიტყანს 5 სა და 3ის ჯერადევბს

numbers = list(range(1, 101))
multiples_of_5_and_3 = [num for num in numbers if num % 5 == 0 and num % 3 == 0]
print("Multiples of 5 and 3: {multiples_of_5_and_3}")