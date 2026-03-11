let rollCount = 0;

let rollBtn = document.getElementById("rollBtn");
let dice = document.getElementById("dice");
let history = document.getElementById("history");

rollBtn.addEventListener("click", function () {

    let randomNumber = Math.floor(Math.random() * 6) + 1;

    let diceImages = [
        "img/dice-six-faces-one.png",
        "img/dice-six-faces-two.png",
        "img/dice-six-faces-three.png",
        "img/dice-six-faces-four.png",
        "img/dice-six-faces-five.png",
        "img/dice-six-faces-six.png"
    ];

    dice.src = diceImages[randomNumber - 1];

    rollCount++;

    history.classList.add("active");

    let newRoll = document.createElement("div");
    newRoll.className = "roll-box";
    newRoll.innerHTML = "Roll " + rollCount + ": <img src='" + diceImages[randomNumber - 1] + "' width='40'>";

    history.appendChild(newRoll);

});