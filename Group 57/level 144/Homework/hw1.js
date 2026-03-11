// 1) შექმენით სტუდენტის ობიექტი, რომელსაც აქვს სახელი, ასაკი და ფაკულტეტი.
// დავალება: დესტრუქციის გამოყენებით შექმენი ცალკე ცვლადები თითოეული კუთვნილებისთვის.

const student = {
    name: "jeff bezos",
    age: 62,
    faculty: "Electrical Engineering and Computer Science"
};
const { name, age, faculty } = student;

console.log(name);
console.log(age);
console.log(faculty);