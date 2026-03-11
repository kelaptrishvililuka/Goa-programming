// 2) მოცემულია რიცხვების სია const numbers = [5, 10, 15, 20]; forEach  ფუნქციის გამოყენებით ეკრანზე გამოიტანე ლუწი რიცხვები კვადრატში აყვანილი

const numbers = [5, 10, 15, 20];

numbers.forEach((number) => {
    if (number % 2 === 0) {
        console.log(number * number);
    }
})