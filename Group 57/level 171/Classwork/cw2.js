let first = document.getElementById("first");
let last = document.getElementById("last");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
let birthday = document.getElementById("birthday");
let photo = document.getElementById("photo");
let errorDiv = document.getElementById("error");

let getUser = new Promise((resolve, reject) => {
    setTimeout(() => {

        let success = true;

        let user = {
            firstName: "Peter",
            lastName: "Johnson",
            email: "peter.johnson@email.com",
            phone: "+1 (200) 234-5678",
            address: "12 Winslow Road, Newark, Delaware",
            birthday: "August 7, 1978",
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
        };

        if (success) {
            resolve(user);
        } else {
            reject("we have an error");
        }

    }, 2000);
});

getUser
    .then((data) => {
        first.textContent = data.firstName;
        last.textContent = data.lastName;
        email.textContent = data.email;
        phone.textContent = data.phone;
        address.textContent = data.address;
        birthday.textContent = data.birthday;
        photo.src = data.photo;
    })
    .catch((error) => {
        errorDiv.textContent = error;
    });