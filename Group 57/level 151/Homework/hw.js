const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let current = "";
let previous = "";
let operator = null;

buttons.forEach(btn => {
    btn.onclick = () => {
        const value = btn.textContent;

        if (value === "C") {
            current = "";
            previous = "";
            operator = null;
            display.textContent = "0";
        }

        else if (value === "=") {
            if (current === "" || previous === "") return;

            let a = Number(previous);
            let b = Number(current);
            let result;

            if (operator === "+") result = a + b;
            if (operator === "-") result = a - b;
            if (operator === "*") result = a * b;
            if (operator === "/") result = b === 0 ? "Error" : a / b;

            display.textContent = result;
            current = result.toString();
            previous = "";
            operator = null;
        }

        else if (btn.classList.contains("op")) {
            operator = value;
            previous = current;
            current = "";
        }

        else {
            current += value;
            display.textContent = current;
        }
    };
});