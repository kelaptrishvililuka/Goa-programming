# 2. ნუგზარის გუშინ მათემატიკის საკონტროლო ქონდა. შეეკითხეთ მას საკონტროლოზე მიღებული ნიშანი(1-10) შემდეგ შექმენით ცვლადები:
# is_A: ამ ცვლადში შეინახეთ True თუ მისი ნიშანი მეტია ან ტოლი 9ზე.
# is_C: ამ ცვლადში შეინახეთ True თუ მისი ნიშანი მეტია ან ტოლი 7ზე [და] ნაკლებია 8ზე.
# is_D: ამ ცვლადში შეინახეთ True თუ მისი ნიშანი მეტია ან ტოლი 6ზე [და] ნაკლებია 7ზე.
# is_F: ამ ცვლადში შეინახეთ True თუ მისი ნიშანი ნაკლებია 6ზე.
# საბოლოოდ კი დაპრინტეთ ყველა ცვლადი.


score = int(input("Please enter your check mark (1-10): "))
is_A = score >= 9
is_B = score >= 8 and score < 9
is_C = score >= 7 and score < 8
is_D = score >= 6 and score < 7
is_F = score < 6
print("is_A:", is_A)
print("is_B:", is_B)
print("is_C:", is_C)
print("is_D:", is_D)
print("is_F:", is_F)