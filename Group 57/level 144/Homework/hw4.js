// 4) შექმენით პიროვნების ობიექტი, რომელსაც აქვს სახელი, გვარი და მისამართი (მისამართი ცალკე ობიექტია და შეიცავს ქალაქსა და ქვეყანას).
// დავალება: დესტრუქციის გამოყენებით მიიღე სახელი, ქალაქი და ქვეყანა.

const person = {
    firstName: "jon",
    lastName: "jones",
    address: {
        city: "Rochester New York",
        country: "USA"
    }
};

const { firstName, address: { city, country } } = person;

console.log(`Name: ${firstName}, City: ${city}, Country: ${country}`);