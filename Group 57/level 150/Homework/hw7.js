// 7)შექმენი კლასი Password

// ქონდეს მნიშვნელობა --> value


// მეთოდები:
// changePassword(newPass)
// checkPassword() --> გამოაქვს შეცვლილი პაროლი

class Password {
    constructor(value) {
        this.value = value;
    }

    changePassword(newPass) {
        this.value = newPass;
    }

    checkPassword() {
        console.log("Current password:", this.value);
    }
}

const myPassword = new Password("12345");
myPassword.changePassword("salami");
myPassword.checkPassword();