let count = 0;

const img = document.createElement("img");
img.id = "bigImage";
img.src = "black.png";
img.style.display = "none";

const audio = document.createElement("audio");
audio.src = "bombo.mp3";
audio.hidden = true;

const counter = document.getElementById("counter");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const resetBtn = document.getElementById("reset");

function updateCounter() {
    counter.textContent = count;

    if (count > 0) {
        counter.style.color = "green";
    } else if (count < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "white";
    }
}

function superDuperCobbleStone() {
    if (count === 50) {
        img.style.display = "block";
        audio.play().catch(err => console.log(err));


        counter.style.display = "none";
        minusBtn.style.display = "none";
        plusBtn.style.display = "none";
        resetBtn.style.display = "none";
    } else {
        img.style.display = "none";


        counter.style.display = "block";
        minusBtn.style.display = "inline-block";
        plusBtn.style.display = "inline-block";
        resetBtn.style.display = "inline-block";
    }
}

document.body.appendChild(img);
document.body.appendChild(audio);

plusBtn.addEventListener("click", () => {
    count++;
    updateCounter();
    superDuperCobbleStone();
});

minusBtn.addEventListener("click", () => {
    count--;
    updateCounter();
    superDuperCobbleStone();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter();
    superDuperCobbleStone();
});

updateCounter();