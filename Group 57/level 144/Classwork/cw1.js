//2) შექმენით სია რომელშიც შეინახავთ რამდენიმე ობიექტს, თითოეული ობიექტი იქნება განსხვავებული, თქვენი მიზანია მოახდინოთ სიის დესტრუქცია შემდეგ კი თითოეული ობიექტის დესტრუქცია და მათი მნიშვნელობების დაბეჭდვა

const peoples = [
  { name: "shalva", age: 18, city: "axalgori" },
  { name: "lika", age: 16, city: "telavi" },
  { name: "saba", age: 27, city: "batumi" }
];

for (const { name, age, city } of peoples) {
  console.log(name, age, city);
}