//1)შექმენი კლასი Car, რომელსაც ექნება:

// properties: brand, model, year
// მეთოდი getInfo(), რომელიც აბრუნებს სტრინგს მანქანის შესახებ

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.brand} ${this.model}, ${this.year}`;
    }
}

const myCar = new Car("mitsubishi", "delica", 2005);
console.log(myCar.getInfo());