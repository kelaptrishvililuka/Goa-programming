//5)1 დან 30 ჩათვლით დაბეჭდეთ ყველა ლუწი რიცხვის ჯამი

let sum = 0;

for (let i = 1; i <= 30; i+=1) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log("The sum of even numbers from 1 to 30 is: " + sum);