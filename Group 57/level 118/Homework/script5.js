const form = document.getElementById("myForm")
const input = document.getElementById("myInput")
const error = document.getElementById("error")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    if (input.value.trim() === "") {
        error.textContent = "Field cannot be empty!"
    } else {
        error.textContent = ""
        alert("Form submitted!")
    }
})