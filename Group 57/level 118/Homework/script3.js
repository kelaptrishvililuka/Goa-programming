function addParagraph() {
    const div = document.getElementById("box")
    const p = document.createElement("p")
    p.textContent = "New paragraph"
    div.appendChild(p)
}