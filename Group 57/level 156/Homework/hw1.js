// 1)შექმენი ერთი ინფუთი,საბმით ღილაკი და ერთ პარაგრაფი

// მომხმარებელი წერს input-ში სახელს და აჭერს ღილაკს.ამის შემდეგ პარაგრაფში უნდა გამოჩნდეს მომხმარებლის მიერ შეყვანილი მნიშნველობა

// დავალება:
// შეინახე ეს სახელი localStorage-ში და გვერდის გადატვირთვის შემდეგაც გამოჩნდეს.

const input = document.getElementById("nameInput");
const button = document.getElementById("saveBtn");
const result = document.getElementById("result");

const saved = localStorage.getItem("username");
if (saved) result.textContent = saved;

button.onclick = () => {
    const name = input.value;

    if (name) {
        localStorage.setItem("username", name);
        result.textContent = name;
        input.value = "";
    }
};