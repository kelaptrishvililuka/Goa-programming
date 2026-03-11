//1)შექმენი სიას სადაც შეინახავ რამდენიმე ობიექტს, ყველა ობიექტში იყოს მსგავსი კიები მაგ: name ,surname , email , შენი დავალებაა რომ მოახდინო სიის დესტრუქცია შემდეგ თითოეული დესტრუქცია და მათი მნიშვნელობების დაბეჭდვა სიაში იყოს მინიმუმ 3 ობიექტი

const user = {
    name: "Johny",
    surname: "Doey",
}

const user1 = {
    name: "lucy",
    surname: "Smith",
}

const user2 = {
    name: "Bob",
    surname: "Johnson",
}

const { name: name1, surname: surname1 } = user;
const { name: name2, surname: surname2 } = user1;
const { name: name3, surname: surname3 } = user2;

console.log(name1, surname1);
console.log(name2, surname2);
console.log(name3, surname3);