/* 2)მომხმარებელს შემოატანინე ორი რიცხვი,მომხმარებლის მიერ შემოტანილი 
პირველი რიცხვიდან მეორე რიცხვამდე იპოვეთ ყველა ლუწი რიცხვის ჯამი */

const start = Number(prompt("Enter first number:"))
const end = Number(prompt("Enter second number:"))

let sum = 0

for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        sum += i
    }
}

console.log("even numbers sum:", sum)