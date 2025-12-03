// 1)შექმენი ობიექტი შენს შესახებ,შენი დავალებაა რომ გამოიტანო კიები და ვალუები ცალ ცალკე for in ის გამოყენებით

let me = {
  name: "luka",
  age: 16,
  city: "Mtskheta",
  hobby: "Programming"
}

console.log("Keys:")
for (let key in me) {
  console.log(key)
}

console.log("Values:")
for (let key in me) {
  console.log(me[key])
}