const textarea = document.getElementById("textarea")
const total = document.getElementById("total")
const remaining = document.getElementById("remaining")

const limit = 50

textarea.addEventListener("input", function () {

    let length = textarea.value.length

    total.innerText = length

    remaining.innerText = limit - length

})