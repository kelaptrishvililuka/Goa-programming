# 8) შექმენით shopping სია სადაც მომხმარებელს შეეძლება რამე ნებისმიერი პროუქტის დამატება და წაშლა, როდესაც მორჩებიან შოპინგს დაუპრინტეთ საბოლოოდ რა შეიძინეს.

print("Hello, Welcome to our online product shop!")
bucket = []
products = [
    "Bread", "Milk", "Cheese", "Butter", "Eggs", "Chicken", "Beef", "Fish", "Rice", "Pasta",
    "Potatoes", "Tomatoes", "Cucumbers", "Carrots", "Onions", "Garlic", "Apples", "Bananas",
    "Oranges", "Grapes", "Strawberries", "Blueberries", "Pineapple", "Mangoes", "Watermelon",
    "Chocolate", "Cookies", "Ice cream", "Juice", "Coffee", "Tea", "Sugar", "Salt", "Pepper",
    "Flour", "Oil", "Vinegar", "Honey", "Yogurt", "Cereal", "Nuts", "Almonds", "Cashews", "Peanuts",
    "Walnuts", "Chips", "Soda", "Beer", "Wine", "Whiskey", "Rum", "Ketchup", "Mayonnaise",
    "Mustard", "Hot sauce", "Pickles", "Jam", "Peanut butter", "Granola", "Biscuits", "Cake",
    "Cupcakes", "Muffins", "Pancakes", "Waffles", "Pizza", "Burgers", "Hot dogs", "Sausages",
    "Steak", "Shrimp", "Lobster", "Crab", "Salmon", "Tuna", "Clams", "Oysters", "Squid", "Mushrooms",
    "Spinach", "Lettuce", "Cabbage", "Broccoli", "Cauliflower", "Zucchini", "Bell peppers",
    "Eggplants", "Peaches", "Pears", "Plums", "Cherries", "Raspberries", "Cranberries", "Avocado",
    "Coconut", "Dates", "Figs", "Kiwi", "Papaya", "Lemon", "Lime", "Ginger", "Turmeric", "Cinnamon",
    "Basil", "Parsley", "Cilantro", "Rosemary", "Thyme", "Oregano", "Mint", "Saffron", "Cardamom",
    "Nutmeg", "Cloves", "Coriander", "Cumin", "Chili powder", "Bay leaves", "Sesame seeds",
    "Chia seeds", "Quinoa", "Barley", "Oats", "Lentils", "Chickpeas", "Kidney beans", "Black beans",
    "Pinto beans", "Green beans", "Asparagus", "Artichokes", "Beets", "Radishes", "Sweet potatoes",
    "Turnips", "Parsnips", "Leeks", "Celery", "Okra", "Kale", "Arugula", "Brussels sprouts",
    "Edamame", "Peas", "Corn", "Tortillas", "Bagels", "Croissants", "Donuts", "Brownies", "Pies",
    "Soups", "Stews", "Sushi", "Ramen", "Spring rolls", "Dumplings", "Tacos", "Quesadillas",
    "Burritos", "Nachos", "Lasagna", "Spaghetti", "Macaroni", "Ravioli", "Fettuccine", "Gnocchi",
    "Risotto", "Fried rice", "Noodles", "Samosas", "Pakoras", "Curry", "Paneer", "Tofu", "Tempeh",
    "Seitan", "Plant-based meat", "Vegan cheese", "Energy bars", "Trail mix", "Pomegranate",
    "Passion fruit", "Lychee", "Durian", "Starfruit", "Dragon fruit", "Goji berries",
    "Sunflower seeds", "Pumpkin seeds", "Blackberries", "Mulberries", "Elderberries",
    "Tangerines", "Clementines", "Nectarines", "Apricots", "Persimmons", "Guava", "Sapodilla",
    "Rutabaga", "Daikon", "Turnip greens", "Collard greens", "Watercress", "Fennel", "Swiss chard",
    "Shallots", "Horseradish", "Bok choy", "Chinese cabbage", "Jalapeños", "Habaneros",
    "Serrano peppers", "Poblano peppers", "Chipotle", "Thai chilies", "Ghost peppers",
    "Carolina reapers", "Wasabi", "Miso", "Seaweed", "Kimchi", "Sauerkraut", "Pickled onions",
    "Pickled eggs", "Fermented tofu", "Rice cakes", "Seaweed snacks", "Tempura", "Teriyaki sauce",
    "Soy sauce", "Tamari", "Mirin", "Ponzu sauce", "Hoisin sauce", "Sriracha", "Tzatziki", "Hummus",
    "Pita bread", "Bagged salads", "Frozen vegetables", "Canned beans", "Canned tomatoes",
    "Canned corn", "Canned peaches", "Canned pineapple", "Canned tuna", "Canned chicken",
    "Canned salmon", "Frozen pizzas", "Frozen burritos", "Frozen waffles", "Frozen desserts",
    "Ice cream bars", "Popsicles", "Sorbet", "Gelato", "Whipped cream", "Buttermilk", "Egg whites",
    "Egg substitute", "Soy milk", "Almond milk", "Oat milk", "Coconut milk", "Rice milk",
    "Lactose-free milk", "Goat milk", "Evaporated milk", "Condensed milk", "Powdered milk",
    "Powdered eggs", "Instant coffee", "Cold brew coffee", "Espresso beans", "Green tea",
    "Black tea", "Herbal tea", "Chamomile tea", "Peppermint tea", "Matcha powder", "Hot chocolate",
    "Energy drinks", "Protein shakes", "Sports drinks", "Sparkling water", "Still water",
    "Coconut water", "Apple juice", "Orange juice", "Grape juice", "Pomegranate juice",
    "Cranberry juice", "Vegetable juice", "Beet juice", "Carrot juice", "Tomato juice"
]

while True:
    print("Would you like to purchase something?")
    a = input("")
    while a not in ["Yes", "No"]:
        print("Please answer with yes' or no")
        a = input("")
    if a == "yes":
        print("What product would you like to choose?")
        answer = input("")
        while answer not in products:
            print("Unfortunately, we don't have that right now. Here is what we have at the moment. Please choose from the list")
            print(products[:])
            print("What product would you like to choose?")
            answer = input("")
        bucket.append(answer)
        print(f"added '{answer}' in the bucket list")
    else:
        print("Would you like to proceed to checkout or leave?")
        ans = input("")
        while ans not in ["cashout", "leave"]:
            print("answer with 'cashout' or 'leave'")
            print("Would you like to proceed to checkout or leave?")
            ans = input("")
        if ans == "leave":
            print("bye")
            break
        else:
            print("here is your bucket list")
            print(bucket)
            card_number = int(input("input card number"))
            cvc = int(input("input your cvc"))
            exp_date = int(input("input your exparation date"))
            print("confirm?")
            answerr = input("")
            if answerr == "Yes" or answer == "y":
                print("thanks for shopping with us")
            print("bye")
            break