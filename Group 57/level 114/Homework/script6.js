// 6)შექმენი ობიექტი person, რომელსაც ექნება "name", "age" და "city". for...in ციკლით გამოიტანე თითოეული key და მისი value.

let person = {
  name: "luka",
  age: 16,
  city: "Mskheta",
};

for (let i in person) {
  console.log(i);
  console.log(person[i]);
}