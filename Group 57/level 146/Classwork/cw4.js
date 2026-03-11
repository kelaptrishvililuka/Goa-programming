// 4) მოცემულია მასივი const users = [
//   {name: "Nika", age: 20},
//   {name: "Ana", age: 25},
//   {name: "Gio", age: 17}
// ]; მოცემული მასივიდა map() ფუნქციის გამოყენებით  თითოეული ასაკი გაამრავლე ორზე და გამოიტანე შევლილი მასივი

const users = [
    { name: "Nika", age: 20 },
    { name: "Ana", age: 25 },
    { name: "Gio", age: 17 }
];

const modifiedUsers = users.map(user => {
    return {
        name: user.name,
        age: user.age * 2
    };
});

console.log(modifiedUsers);