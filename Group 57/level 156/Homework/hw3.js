// 3)გვერდზე გაქვს ქუაუნთერი + -  და reset ღილაკებით

// დავალება:

// ყოველ დაჭერაზე counter იზრდება 1 ით

// მნიშვნელობა ინახება localStorage-ში

// refresh-ზე არ ნულდება

let counter = Number(localStorage.getItem("counter")) || 0;

let count = document.getElementById("count")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let reset = document.getElementById("reset")

count.textContent = counter

plus.onclick = function () {
    counter++
    count.textContent = counter;
    localStorage.setItem("counter", counter);
};

minus.onclick = function () {
    counter--
    count.textContent = counter;
    localStorage.setItem("counter", counter);
};

reset.onclick = function () {
    counter = 0
    count.textContent = counter;
    localStorage.setItem("counter", counter);
};