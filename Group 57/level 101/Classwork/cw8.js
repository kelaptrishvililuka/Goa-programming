//8)ვინც დაამთავრეთ : მომხმარებელს შემოატანინეთ რიცხვი,1 დან მომხმ შემოტანილ რიცხვამდე იპოვე რიცხვების ჯამი

let n = Number(prompt("Enter Number: "));
let sum = 0;
let i = 1;

while(i <= n){
    sum = sum + i;
    i = i + 1;
}

console.log(sum);