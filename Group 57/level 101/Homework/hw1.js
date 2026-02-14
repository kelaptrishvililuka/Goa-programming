/* 1)მომხმარებელს შემოატანინე რაიმე რიცხვი,1 დან მომხმარებლის შემოტანილ რიცხვამდე
 დათვალე თუ რამდენი ლუწი და რამდენი კენტი რიცხვია */

const number = Number(prompt("Enter number: "));

let evenCount = 0
let oddCount = 0

for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("even numbers amount:", evenCount)
console.log("odd numbers amount:",oddCount)