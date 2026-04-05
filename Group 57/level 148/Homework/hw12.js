// 12)მოცემულია მასივი პროდუქტების ობიექტებით:

// const products = [
//     { name: "ვაშლი", price: 2 },
//     { name: "ბანანი", price: 3 },
//     { name: "სტაფილო", price: 1 }
// ];

// გამოიყენე reduce, რათა გამოითვალოს პროდუქტების საერთო ფასი.

// დაბეჭდე შედეგი.

const products = [
    { name: "ვაშლი", price: 2 },
    { name: "ბანანი", price: 3 },
    { name: "სტაფილო", price: 1 }
];

const totalPrice = products.reduce((accumulator, product) => {
    return accumulator + product.price;
}, 0);

console.log("პროდუქტების საერთო ფასი:", totalPrice);