# 6)შეამოწმე მომხმარებლის შემოტანილი რიცხვი თუ არის 5-ის ან 10-ის ჯერადი.

num6=int(input("Enter number: "))
if num6 % 5 == 0 or num6 % 10 == 0:
    print(num6 ,"xutis an atis jeradia")
else:
   print("ar aris jeradi")              