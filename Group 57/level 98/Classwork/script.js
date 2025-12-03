let number = Number(prompt("Enter a number:"));

if (number > 0 && number % 2 === 0) {
    console.log("this number is positive and Even");
} else if (number < 0 && number % 2 !== 0) {
    console.log("this number is Odd");
} else {
    console.log("This number is zero");
}