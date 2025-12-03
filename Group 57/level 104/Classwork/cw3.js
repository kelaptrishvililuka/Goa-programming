//3)შექმენი ფუნქცია,გადაეცი ორი სია,ერთი სტრინგების ერთ რიცხვების,შენი დავალებაა რომ გააერთიანო ეს ორი სია ერთმანეთში და მასე დააბრუნო.

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2)
}

const strings = ["a","b","c"]
const numbers = [1,2,3]

console.log(mergeArrays(strings, numbers))