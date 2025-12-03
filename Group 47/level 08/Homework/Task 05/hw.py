# 5. შექმენით a, b და c ცვლადები და მიანიჭეთ მათ ნებისმიერი მთელი რიცხვი. შექმენით ახალი 3 ცვლადი:
# is_a_greatest: ამ ცვლადში შეინახეთ True, თუ a არის უდიდესი ამ სამიდან.
# is_b_middle: ამ ცვლადში შეინახეთ True თუ b არის საშუალო მნიშვნელობა (არა უდიდესი ან უმცირესი).
# is_c_least: ამ ცვლადში შეინახეთ True, თუ c არის სამიდან უმცირესი.


a = 200
b = 400
c = 700
is_a_greatest = a > b and a > c
is_b_middle = (b > a and b < c) or (b < a and b > c)
is_c_least = c < a and c < b
print("is_a_greatest:", is_a_greatest)
print("is_b_middle:", is_b_middle)
print("is_c_least:", is_c_least)