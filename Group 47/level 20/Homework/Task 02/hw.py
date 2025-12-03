# დავალება 2 :
# შექმნი სია სადაც იქნება სადაც იანქბა ციფრები რომელიც გამოიტანს 5 სა და 3ის ჯერადევბს

num_arr = []

number = 1

while number <= 100:
    if number % 3 == 0 or number % 5 == 0:
       num_arr.append(number)  
    number += 1
print("five and three multiply",num_arr)