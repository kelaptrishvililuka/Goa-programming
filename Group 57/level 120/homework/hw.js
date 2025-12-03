const word = document.getElementById('textInput');
const yellowBtn = document.getElementById("one");
const greenBtn = document.getElementById("four");
const redBtn = document.getElementById("three");
const blueBtn = document.getElementById("two");
const orangeBtn = document.getElementById("five");
const purpleBtn = document.getElementById("six");
const cyanBtn = document.getElementById("seven");
const brownBtn = document.getElementById("eight");



yellowBtn.addEventListener('click', () => {
    word.style.color = "yellow"
})
blueBtn.addEventListener('click', () => {
    word.style.color = "blue"
})
redBtn.addEventListener('click', () => {
    word.style.color = "red"
})
greenBtn.addEventListener('click', () => {
    word.style.color = "green"
})
orangeBtn.addEventListener('click', () => {
    word.style.color = "orange"
})
purpleBtn.addEventListener('click', () => {
    word.style.color = "purple"
})
cyanBtn.addEventListener('click', () => {
    word.style.color = "cyan"
})
brownBtn.addEventListener('click', () => {
    word.style.color = "brown"
})