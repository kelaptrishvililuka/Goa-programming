# 1)
# res = ""
# for index in range(5):
#    print(giorgi_list[index])

# ყველა ელმენტი გადააქციეთ string ად და დაუმატეთ res 
# საბოლოოდ გამოიმიტანეთ შედგი ერთ ხაზში

#                  0        1          2       3    4
# giorgi_list = ["vaja", "daviti", "daviti2", True, 12 ]

res = ""
giorgi_list = ["vaja", "daviti", "daviti2", True, 12]

for index in range(5):
    res += str(giorgi_list[index]) + " "

print(res)
