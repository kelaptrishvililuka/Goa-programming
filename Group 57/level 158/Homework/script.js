const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

let users = JSON.parse(localStorage.getItem("users")) || [];

if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const user = {
            fullname: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        };

        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registered successfully");
    });
}

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        let found = false;

        for (let user of users) {
            if (user.email === email && user.password === password) {
                found = true;
                break;
            }
        }

        if (found) {
            alert("Login successful");
        } else {
            alert("Invalid email or password");
        }
    });
}