# 6. შექმენით ცვლადი სახელად score, რომელშიც შეინახავთ ნებისმიერ მთელ რიცხვს(0-100), შექმენით 4 ცვლადი:
# is_pass: ამ ცვლადში შეინახეთ True, თუ ქულა არის 50 ან მეტი.
# is_high_pass: ამ ცვლადში შეინახეთ True, თუ ქულა არის 75-დან 90-მდე (ექსკლუზიური).
# is_perfect: ამ ცვლადში შეინახეთ True, თუ ქულა უდრის 100-ს.
# is_failing: ამ ცვლადში შეინახეთ True, თუ ქულა 50-ზე ნაკლებია


score = 99
is_pass = score >= 50
is_high_pass = score > 75 and score < 90
is_perfect = score == 100
is_failing = score < 50
print("is_pass:", is_pass)
print("is_high_pass:", is_high_pass)
print("is_perfect:", is_perfect)
print("is_failing:", is_failing)