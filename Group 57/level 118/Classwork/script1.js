let div = document.createElement("div")
let p = document.createElement("p")
let btn = document.createElement("button")

p.textContent = "txt"
btn.textContent = "btn"

div.appendChild(p)
div.appendChild(btn)

document.body.appendChild(div)