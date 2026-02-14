//დაამატეთ ინფუთი საიდანაც მომხმარებელი შეიყვანს ფერს და როდესაც ღილაკს დააჭერს რაფერიც იქნება შეყვანილი იმფრად შეიღებოს ყველაფერი, ასევე ინფუთს დაამატეთ ვალიდაციები,რომ თუ ისეთ რამეს შემოიყვან რაც არ არის ფერის გამომხატველი  მოუფიქრრთ ვალიდაცია რომ არასწორად შეიყვანა მომხმარებელმა ფერი და თავიდან ცადოს

const body = document.body;
const btn = document.getElementById("btn");
const span = document.getElementById("span");
const form = document.getElementById("form");
const inp = document.getElementById("inp");
const err = document.getElementById("error");

const collorArr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];

let code = "";
for (let i = 0; i < 6; i++) {
    code += collorArr[Math.floor(Math.random() * collorArr.length)];
}
body.style.backgroundColor = `#${code}`;
span.textContent = `#${code}`;
span.style.color = `#${code}`;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    err.textContent = '';

    if (e.target.Color.value.length > 0) {
        code = e.target.Color.value;

        if (e.target.Color.value.length != 6) {
            code = "Error";
            span.textContent = `#${code}`;
            span.style.color = "red";
            body.style.backgroundColor = "red";
            err.textContent = "The length should be 10 or less";
            return;
        }

        for (let i of e.target.Color.value) {
            if (!collorArr.includes(i)) {
                code = "Error";
                span.textContent = `#${code}`;
                span.style.color = "red";
                body.style.backgroundColor = "red";
                err.textContent = "May these symbols be 0-9, A-F";
                return;
            }
        }

        body.style.backgroundColor = `#${code}`;
        span.textContent = `#${code}`;
        span.style.color = `#${code}`;

    } else if (e.target.Color.value.length == 0) {
        let code = "";
        for (let i = 0; i < 6; i++) {
            code += collorArr[Math.floor(Math.random() * collorArr.length)];
        }
        body.style.backgroundColor = `#${code}`;
        span.textContent = `#${code}`;
        span.style.color = `#${code}`;
    }
    else if (e.target.Color.value == 'white' && e.target.span.value != 'FFFFFF') {
        code = "Error";
        span.textContent = "Error";
        span.style.color = "red";
        body.style.backgroundColor = "red";
        err.textContent = "Incorrect input";
        return;
    }

    e.target.Color.value = code;
});