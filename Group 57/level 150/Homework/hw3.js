// 3)შექმენი კლასი Calculator, რომელსაც ექნება მეთოდები:

// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)

class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}

const calc = new Calculator();

console.log(calc.add(5, 3));
console.log(calc.subtract(5, 3));
console.log(calc.multiply(8, 9));
console.log(calc.divide(9, 0.3));     