//შექმენით ორი input ველი რომელშიც შეიყვანთ თქვენს სახელს და ასაკს, შემდეგ კონსტრუქტორის გამოყენებით დაწერეთ ფუნქცია რომელიც ამუშავდება submit ღილაკზე დაჭერისას და საიტზე გამოიტანს  თქვენს შეყვანილ სახელს და ასაკს 

const form = document.getElementById('form');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    function User(name, age) {
        this.name = name
        this.age = age
    }

    const item1 = document.createElement('li');
    const item2 = document.createElement('li');

    item1.innerText = e.target.name.value;

    item2.innerText = e.target.age.value;

    document.body.append(item1, item2);


});