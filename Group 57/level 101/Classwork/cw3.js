//3)მომხმარებელს შეეკითხეთ რიცხვი,შემდეგ 1 დან მომხმ შემოტანილ რიცხვამდე დაბეჭდეთ ყველა რიცხვი 

let userNumber = prompt("Enter a Number:");

userNumber = Number(userNumber);

let i = 1; 

while (i <= userNumber) {
    console.log(i); 
    i++;
}