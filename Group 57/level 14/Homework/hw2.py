# 2) გამოიყენეთ or ოპერატორი, რათა შეამოწმოთ, თუ მოცემული ციფრები არიან 10-ზე მეტი ან 50-ზე ნაკლები.

num = float(input("Enter a number: "))

if num > 10 or num < 50:
    print("The number meets the condition: it is greater than 10 or less than 50.")
else:
    print("The number does not meet the condition.")