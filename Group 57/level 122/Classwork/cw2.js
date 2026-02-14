//შექმენით ობიექტი კონსტრუქტორის გამოყენებით სადაც იქნებიან სხვადასხვა ცხოველები და ყველას ასევე ექნება საკუთარი ასაკი

function Animal(name,age) {
    this.name = name
    this.age = age
}
const bull = new Animal("bull", 9)
const goat = new Animal("goat", 4)
const wolf = new Animal("wolf", 7)

console.log(bull)
console.log(goat)
console.log(wolf)