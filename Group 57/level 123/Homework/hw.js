// შექმენი ფორმა სადაც გექნება სამი input-ი, სახელისთვის, ასაკისთვის და პროფესიისთვის, ასევე submit ღილაკი. შექმენი კონსტრუქტორ ფუნქცია რომელის პარამეტრად მიიღებს სახელს, ასაკს და პროფესიას, შექმენი ფუნქცია კონტრუქტორში რომელიც დააბრუნებს სახელი - პროფესია (ანუ მომხარებლის სახელს და გვერდით მის პროფესიას). dom-ში შექმენი div და მასში ჩაამატე პარაგრამი რომლის მნიშვნელობა იქნება ის რასაც კონსტრუქტორის ფუნქცია დააბრუნებს

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    function User(name, age, prof) {
        this.name = name
        this.age = age
        this.prof = prof
        this.showInfo = function() {
            console.log(name + "-" + prof)
        }
    }

    const newUser = new User(
        e.target.name.value,
        e.target.age.value,
        e.target.prof.value
    )

    const div = document.createElement('div')
    const p = document.createElement('p')

    p.innerText = `${newUser.name}, ${newUser.age}, ${newUser.prof}`
    div.appendChild(p)
    console.log(newUser.showInfo())
    document.body.appendChild(div)
})