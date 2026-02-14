// //5)შექმენი ფუნქცია login(username, password)

// სწორი მონაცემები:
// username: "admin"

// password: "1234"

// მომხმარებელს შემოატანინე username და password და გადაეცით ფუნქციას არგუმენტად

// შეამოწმე:

// ორივე თუ სწორია → "Welcome"

// username სწორია, password არა → "Wrong password"

// სხვა შემთხვევაში → "Access denied"

function login(username, password) {
    return (username === "admin" && password === "12345") ? "Welcome" :
        (username === "admin" ? "Wrong password" : "Access denied");
}

let user = prompt("Enter username:");
let pass = prompt("Enter password:");

console.log(login(user, pass));