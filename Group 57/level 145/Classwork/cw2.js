//2) შექმენი ცარიელი ობიექტი და ამ ობიექტში დესტრუქციის დროს გადაეცი ის მნიშვნელობები რასაც მომხმარებელი შემოიყვანს, მომხმარებელს შემოაყვანინე სახელი და გვარი, default მნიშნველობად ასევე ყველას მიანიჭე რაიმე რენდომ ასაკი და იმეილი

let user = {};

let name = prompt("enter your name:");
let surname = prompt("enter your surname:");
let email = prompt("enter your email:");

({ name, surname, email } = user);
console.log(user);