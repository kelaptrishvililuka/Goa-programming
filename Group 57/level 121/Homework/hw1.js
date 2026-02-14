const form = document.getElementById('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const item1 = document.createElement('li')
    const item2 = document.createElement('li')
    const item3 = document.createElement('li')
     
    item1.innerText = e.target.name.value
    item2.innerText = e.target.surname.value
    item3.innerText = e.target.age.value

    document.body.append(item1)
    document.body.append(item2)
    document.body.append(item3)
})