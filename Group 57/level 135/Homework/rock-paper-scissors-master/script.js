const buttons = document.querySelectorAll(".choice");
const scoreEl = document.getElementById("score");

let score = 0;
const choices = ["rock", "paper", "scissors"];

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const user = btn.dataset.choice;
        const computer = choices[Math.floor(Math.random() * 3)];

        if (user === computer) return;

        const win =
            (user === "rock" && computer === "scissors") ||
            (user === "paper" && computer === "rock") ||
            (user === "scissors" && computer === "paper");

        if (win) score++;
        else score--;

        scoreEl.textContent = score;
    });
});