//4)მომხმარებელს შეეკითხეთ რიცხვი,შემდეგ 1 დან მომხმ შემოტანილ რიცხვამდე დაბეჭდეთ ლუწი რიცხვები

let userNumber = prompt("Enter a Number:");
userNumber = Number(userNumber);

let i = 2; 

while (i <= userNumber) {
    console.log(i);
    i += 2;
}