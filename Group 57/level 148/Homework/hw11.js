// 11)მოცემულია მასივი:

// const numbers = [5, 10, 15, 20];

// გამოიყენე reduce, რათა გამოითვალოს ყველა რიცხვის ჯამი.

// დაბეჭდე შედეგი.

const numbers = [5, 10, 15, 20];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("ჯამი:", sum);