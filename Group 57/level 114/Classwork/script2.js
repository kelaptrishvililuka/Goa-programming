// 2)შექმენი ობიექტი ავტომობილის შესახებ ,გქონდეს year , model , milage , color , შენი დავალებაა რომ შექმნა სია ვალუებისა,შემდეგ გადაუარო ამ სიას და გმაოიტანო ცალ ცალკე თითოეული value გამოიყენე for of ციკლი

let car = {
  year: 2016,
  model: "Audi rs7",
  milage: 350000,
  color: "Black"
}

let values = Object.values(car)

for (let value of values) {
  console.log(value)
}