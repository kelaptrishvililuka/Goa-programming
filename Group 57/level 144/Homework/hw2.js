// 2) შექმენით მანქანის ობიექტი, რომელსაც აქვს ბრენდი, მოდელი და გამოშვების წელი.
// დავალება: დესტრუქციის დროს ბრენდისა და მოდელის ცვლადებს შეუცვალე სახელები, ხოლო წელი უცვლელად დატოვე.

const car = {
    brand: "McLaren",
    model: "750S",
    year: 2023
};

const { brand: carBrand, model: carModel, year } = car;

console.log(carBrand);
console.log(carModel);
console.log(year);