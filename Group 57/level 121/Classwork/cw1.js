// 1) შექმენით ფორმა სადაც იქნება რამდენიმე ინფუთი, სადაც შეიყვანთ სახელს, გვარს, ასაკს, მეილს, შემდეგ კი js ში როდესაც ფორმა დასაბმითდება კონსოლში დაბეჭდეთ ის მონაცემები რაც მომხმარებელმა ინფუთებში შეიყვანა

const form = document.getElementById('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    console.log(e.target.name.value)
    console.log(e.target.surname.value)
    console.log(e.target.age.value)
    console.log(e.target.email.value)
})