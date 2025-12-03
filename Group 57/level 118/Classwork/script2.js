let btn = document.getElementById("btn")
let count = 1

function click() {
    console.log("button is clicked", count)
    count++
}

btn.addEventListener("click", click)