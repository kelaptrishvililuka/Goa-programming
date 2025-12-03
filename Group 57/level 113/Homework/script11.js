//11)შექმენი ობიექტი phone = {brand: "Apple"}
//დაამატე model და price ველები, შემდეგ ტერმინალში გამოიტანეთ ყველა value სიის სახით და ასევე ყველა key სიის სახით

let phone = {brand: "Apple"}
phone.model = "iPhone 120"
phone.price = 25000

console.log(Object.values(phone))
console.log(Object.keys(phone))