// 4)შექმენი კლასი Product, რომელსაც ექნება:

// name, price, quantity
// მეთოდი getTotalPrice() → აბრუნებს მთლიან ფასს(ფასი გამრავლებული ოდენობაზე)

class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.price * this.quantity;
    }
}

const product1 = new Product("ps4", 1000, 3);

console.log(product1.getTotalPrice());