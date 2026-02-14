//შექმენი input ველი რომელიც მიიღებს მომხმარებლის ასაკს და მეორე input რომელიც მიიღებს  რიცხვს თუ რამდენი წლით უნდა მოგზაურობა მომავალში, calculate ღილაკზე დაჭერის შემდეგ ამუშავდე კონსტრუქტორის ფუნქცია რომელიც გამოითვლის თუ რამდენი წლის იქნება მომხმარებელი დროში მოგზაურობის შემდეგ, შედეგი გამოიტანეთ საიტზე

let form = document.getElementById("form")
let body = document.body

function Person(name, age) {
    this.name = name
    this.age = age
    this.say = function () {
        return "My name is " + this.name + " and my age is " + this.age
    };
}

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let myUser = new Person(e.target.name.value, e.target.age.value)
    let myP = document.createElement("p")
    myP.textContent = myUser.say()
    body.appendChild(myP)
})