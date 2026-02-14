const body = document.body;
const btn = document.getElementById("btn");
const span = document.getElementById("span");

const colorArr = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "A", "B", "C", "D", "E", "F"
];

function generateRandomColor() {
    let code = "";
    for (let i = 0; i < 6; i++) {
        code += colorArr[Math.floor(Math.random() * colorArr.length)];
    }
    return code;
}

btn.addEventListener("click", function () {
    const randomColor = generateRandomColor();
    body.style.backgroundColor = `#${randomColor}`;
    span.textContent = `#${randomColor}`;
    span.style.color = `#${randomColor}`;
});