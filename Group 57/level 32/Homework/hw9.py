# Boss Level: გახსენით მაღაზია სახელად PC Parts, სადაც შეგიძლიათ შეიძინოთ სხვადასხვა კომპიუტერული ნაწილი მაგალითად: პროცესორები, ვიდეო ბარათები, ოპერატიული მეხსიერება, კვების ბლოკები, კორპუსები და სხვა. თითოეულ პროდუქტს მიანიჭეთ შესაბამისი ფასი. საბოლოოდ, დაპრინტეთ ჩეკი, სადაც ჩამოთვლილი იქნება შეძენილი ნივთები და ჯამური თანხა. 

pc_parts = {
    "CPU (Central Processing Unit)": 450,
    "GPU (Graphics Processing Unit)": 400,
    "RAM (Random Access Memory)": 700,
    "Motherboard": 650,
    "Power Supply Unit (PSU)": 80,
    "Hard Drive (HDD)": 140,
    "Solid State Drive (SSD)": 100,
    "Cooling System: Fan, Liquid Cooling": 150,
    "Case": 90,
    "Monitor": 120,
    "Keyboard": 60,
    "Mouse": 70,
    "Speakers": 90,
    "Webcam": 80,
    "Network Card": 150,
    "Optical Drive": 165,
    "Ports (e.g., USB, HDMI, Ethernet)": 350,
}

print("Welcome to the PC Parts store!")
print("Choose products from the following list:")

for part, price in pc_parts.items():
    print(part, "-", price, "USD")

print("Type the exact product name or enter 'STOP' to finish shopping.")

cart = []

while True:
    choice = input("Enter the product name: ")
    if choice == "STOP":
        break
    elif choice in pc_parts:  
        cart.append(choice)
        print(choice, "has been added to your cart.")
    else:
        print("Product not found. Please try again.")

if cart:
    print("--- Your Receipt ---")
    total = 0
    for item in cart:
        price = pc_parts[item]
        total += price
        print(item, "-", price, "USD")
    print("--------------------")
    print("Total:", total, "USD")
else:
    print("You didn't purchase anything.")