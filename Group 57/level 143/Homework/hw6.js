// 6)მომხმარებელს შემოატანინე რიცხვი.
// switch(true) გამოყენებით განსაზღვრე:

// თუ არის 0

// თუ არის ლუწი

// თუ არის კენტი

const num = parseInt(prompt("Enter a number:"));

switch (true) {
    case num === 0:
        console.log("Number is 0");
        break;
    case num % 2 === 0:
        console.log("Number is even");
        break;
    case num % 2 !== 0:
        console.log("Number is odd");
        break;
    default:
        console.log("Invalid input");
}