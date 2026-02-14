// 1) შექმენით ღილაკი როდესაც ამ ღილაკს დავაჭერთ კონსოლში დაიბეჭდოს ამჟამინდელი დრო ასეთი სახით 21:36:07

const button = document.getElementById("timeBtn");

button.addEventListener("click", function() {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    const currentTime = hours + ":" + minutes + ":" + seconds;
    console.log(currentTime);
});