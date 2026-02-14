let button = document.getElementById('button')


let namey = document.getElementById('name')
let pass = document.getElementById('password')
let mail = document.getElementById('email')

const nameErr = document.getElementById("1");
const passErr = document.getElementById("3");
const mailErr = document.getElementById("2");


let list = []


button.addEventListener("click", (e) => {
    e.preventDefault()
    function User(username,pass,email){
        this.name = username
        this.pass = pass
        this.email = email
    } 
    nameErr.textContent = "";
    mailErr.textContent = "";
    passErr.textContent = "";


    let ok = true;

    if (namey.value.length < 2) {
        nameErr.textContent = "Name Must be at least 2 letters";
        ok = false;
    }

    if (pass.value.length < 2) {
        passErr.textContent = "Password Must be at least 2 letters";
        ok = false;
    }

    ;
    if (mail.value.length < 12) {
        mailErr.textContent = "Mail must be atleast 12 letters"
        ok = false;
    }

    if (ok != true) return;  
    
    let newUser = new User(namey.value,pass.value,mail.value)
    list.push(newUser)
    console.log(list)


    form.reset()
})