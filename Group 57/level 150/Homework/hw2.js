// 2)შექმენი კლასი User, რომელსაც ექნება:

// name, age
// მეთოდი changeName(newName) --> შეცვლის სახელს
// მეთოდი increaseAge() ---> გაზრდის ასაკს თქვენთვის სასურველი რიცხვით

// გამოიძახეთ ორივე ფუნქცია და ამის შემდეგ დააკონსოლლოგეთ მთლიანი ობიექტი

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    changeName(newName) {
        this.name = newName;
    }

    increaseAge(number) {
        this.age = this.age + number;
    }
}

const user1 = new User("Luka", 17);

user1.changeName("Mate");
user1.increaseAge(2);

console.log(user1);