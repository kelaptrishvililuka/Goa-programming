# 4. შემოატანინეთ მომხმარებელს მისი სახელი გვარი მშობლების სახელი გვარი საყვარელი ფერი საყვარელი მანქანა 3 საყვარელი ჰობი და ეს ყველაფერი დაბეჭდეთ ერთ დიდ წინადადებაში

# მომხმარებლისგან იღებს ინფორმაციას
name = input("enter your name: ")
surname = input("enter your surname: ")
parent_name = input("enter parent name: ")
parent_surname = input("enter parent surname: ")
favorite_color = input("enter your favorite color: ")
favorite_car = input("enter your favorite car: ")
hobby1 = input("enter hobby1: ")
hobby2 = input("enter hobby2: ")
hobby3 = input("enter hobby3: ")

# ინფორმაციის დაბეჭდვა ერთ წინადადებაში
print("თქვენი სახელი და გვარი არის " + name + " " + surname + ", თქვენი მშობლის სახელი და გვარი არის " + parent_name + " " + parent_surname + ". თქვენი საყვარელი ფერი არის " + favorite_color + ", საყვარელი მანქანა არის " + favorite_car + ", და თქვენი საყვარელი ჰობებია: " + hobby1 + ", " + hobby2 + ", და " + hobby3 + ".")