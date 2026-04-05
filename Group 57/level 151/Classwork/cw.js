// 1) შექმენი კლასი User, რომელსაც ექნება:

// name, age
// მეთოდი changeName(newName) --> შეცვლის სახელს
// მეთოდი increaseAge() ---> გაზრდის ასაკს თქვენთვის სასურველი რიცხვით

// გამოიძახეთ ორივე ფუნქცია და ამის შემდეგ დააკონსოლლოგეთ მთლიანი ობიექტი


// ამ ყველაფერს დაამატეთ dom და html ის ინფუთებით შეიყვანეთ მონაცემები

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

function changeName(user, newName) {
    user.name = newName;
}

function increaseAge(user, years) {
    user.age += years;
}

let user = null;
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const userInfo = document.getElementById("userInfo");

function updateUserInfo() {
    if (user) {
        userInfo.textContent = "Name: " + user.name + ", Age: " + user.age;
        console.log("Name:", user.name, "Age:", user.age);
    } else {
        userInfo.textContent = "No user yet.";
    }
}

document.getElementById("createBtn").onclick = () => {
    user = new User(nameInput.value, Number(ageInput.value));
    updateUserInfo();
};

document.getElementById("changeNameBtn").onclick = () => {
    if (user) {
        const newName = prompt("Enter new name:");
        if (newName) changeName(user, newName);
        updateUserInfo();
    } else alert("Create user first!");
};

document.getElementById("increaseAgeBtn").onclick = () => {
    if (user) {
        const years = Number(prompt("Increase age by:"));
        increaseAge(user, years);
        updateUserInfo();
    } else alert("Create user first!");
};