const form = document.getElementById('form');

const nameErr = document.getElementById("1");
const surnameErr = document.getElementById("2");
const ageErr = document.getElementById("3");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    nameErr.textContent = "";
    surnameErr.textContent = "";
    ageErr.textContent = "";

    let ok = true;

    if (e.target.name.value.trim().length < 2) {
        nameErr.textContent = "Must be at least 2 letters";
        ok = false;
    }

    if (e.target.surname.value.trim().length < 2) {
        surnameErr.textContent = "Must be at least 2 letters";
        ok = false;
    }

    const age = Number(e.target.age.value);
    if (age < 1 || age > 120) {
        ageErr.textContent = "Age must be between 1 and 120";
        ok = false;
    }

    if (ok != true) return;

    const item1 = document.createElement('li');
    const item2 = document.createElement('li');
    const item3 = document.createElement('li');

    item1.innerText = e.target.name.value;
    item2.innerText = e.target.surname.value;
    item3.innerText = e.target.age.value;

    document.body.append(item1, item2, item3);

    form.reset();
});