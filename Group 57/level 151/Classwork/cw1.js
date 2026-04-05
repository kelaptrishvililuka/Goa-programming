// 2) შექმენი კლასი Calculator, რომელსაც ექნება მეთოდები:

// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)


// ამ ყველაფერს დაამატეთ დომი


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
        if (b === 0) {
            return "Cannot divide by 0!";
        }
        return a / b;
    }
}

const calc = new Calculator();

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

document.getElementById('addBtn').onclick = () => {
    result.textContent = calc.add(Number(num1.value), Number(num2.value));
};

document.getElementById('subtractBtn').onclick = () => {
    result.textContent = calc.subtract(Number(num1.value), Number(num2.value));
};

document.getElementById('multiplyBtn').onclick = () => {
    result.textContent = calc.multiply(Number(num1.value), Number(num2.value));
};

document.getElementById('divideBtn').onclick = () => {
    result.textContent = calc.divide(Number(num1.value), Number(num2.value));
};