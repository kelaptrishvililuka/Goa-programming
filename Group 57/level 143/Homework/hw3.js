// 3)მომხმარებელს შემოატანინე:

// პირველი რიცხვი

// ოპერატორი (+, -, *, /)

// მეორე რიცხვი

// switch–case გამოყენებით შეასრულე ოპერაცია.
// თუ ოპერატორი არასწორია → "არასწორი ოპერატორი".

const num1 = parseFloat(prompt("first number:"));
const operator = prompt("operator (+, -, *, /):");
const num2 = parseFloat(prompt("second number:"));

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    default:
        console.log("Invalid operator");
}