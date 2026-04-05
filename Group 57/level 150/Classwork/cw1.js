// შექმენი კლასი სახელად Bank რომელშიც გექნება მომხმარებლის სახელი, გვარი და მისი ბალანსი(თანხა რომელიც აქვს ანგარიშზე), ასევე რა რაოდენობის თანხის შეტანა სურს ექუნთზე, შექმენი კლასში მეთოდი რომლის მეშვეობით მომხმარებელი შეძლებს ბალანსზე თანხის შეტანას და დამატებას, შედეგი გამოიტანეთ კონსოლში

class Bank {
  constructor(name, surname, balance) {
    this.name = name;
    this.surname = surname;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(
      this.name + " " + this.surname +
      " to deposit " + amount +
      " lari. new balance: " + this.balance
    );
  }
}

const user1 = new Bank("luka", "Keleptrishvili", 150);

user1.deposit(50);