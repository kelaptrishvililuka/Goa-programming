// 5)შექმენი კლასი BankAccount, რომელსაც ექნება:

// owner, balance
// მეთოდი deposit(amount) --> შეგვაქვს თანხა ანგარიშზე და ბეჭდავს განახლებულ ბალანსს
// მეთოდი withdraw(amount) --> გაგვაქვს თანხა ანგარიშიდან და ბეჭდავს დარჩენილ თანხას ანგარიშზე

// დააკონსოლლოგეთ ბოლოს მთლიანი ობიექტი რომ ნახოთ შეცვლილი ობიექტი

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance = this.balance + amount;
        console.log("New balance: " + this.balance);
    }

    withdraw(amount) {
        this.balance = this.balance - amount;
        console.log("Remaining balance: " + this.balance);
    }
}

const account1 = new BankAccount("luka", 1500);

account1.deposit(500);   
account1.withdraw(300); 

console.log(account1);