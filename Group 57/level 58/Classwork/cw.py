# 1) შექმენით ფუნქცია რომელსაც გადაეცემა 2 პარამეტრი, a და b. თუ a პარამეტრი ლუწია მაშინ ის გაყეთ 2-ზე სხვა შემთხვევაში კი დაუმატეთ ერთი, საბოლოოდ კი დააბრუნეთ a - b. შემდეგ გამოიძახეთ ეს ფუნქცია მინიმუმ ერთხელ და კომენტარებით ახსენით რა არის return keyword.

def sum(a, b):
    if a % 2 == 0:
        a = a // 2
    else:
        a = a + 1

    return a - b

result = sum(6, 3)
print(result) 

# return keyword-ის საშუალებით ფუნქცია აბრუნებს მნიშვნელობას, რომელიც შეიძლება გამოყენებულ იქნას ფუნქციის გამოძახების ადგილას.
# return-ის გარეშე ფუნქცია უბრალოდ შეასრულებს კოდს და არ დააბრუნებს რაიმე მნიშვნელობას.