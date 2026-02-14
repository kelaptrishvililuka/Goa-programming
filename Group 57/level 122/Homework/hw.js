let button = document.getElementById('button')

function User(username, pass) {
    this.name = username
    this.pass = pass
}

let list = []

button.addEventListener("click", function () {
    let user = prompt('enter username')
    let pass = prompt('enter pass')
    let newUser = new User(user, pass)
    list.push(newUser)
    console.log(list)
})