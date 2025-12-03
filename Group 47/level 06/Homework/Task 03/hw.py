# 3. სთხოვეთ მომხმარებელს შემოიტანოს მისი სახლიდან სკოლამდე მანძილი კილომეტრებში და დაუპრინტეთ თუ რა მანძილია მისი სახლიდან სკოლამდე მეტრებში,სანტიმეტრებში და მილიმეტრებში.

# მომხმარებლისგან იღებს მანძილს კილომეტრებში
km = float(input("enter Distance from home to school: "))
meters = km * 1000
centimeters = meters * 100
millimeters = centimeters * 10
# ხდება შედეგის დაბეჭდვა
print("The distance is " + (km) + " kilometers.")
print("This is equal to " + (meters) + " meters.")
print("(centimeters)" + " centimeters.")
print("(millimeters)" + " millimeters.")