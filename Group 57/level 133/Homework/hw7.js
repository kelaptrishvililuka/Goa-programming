//7)დაწერე კოდი, სადაც არის:

// ერთი global ცვლადი

// ორი block scope ცვლადი (ერთი if ბლოკში და მეორე for ციკლში)

// შენი დავალებაა

// console.log–ით გამოიტანე ყველა ცვლადი ბლოკის გარეთ და ნახე შედეგი

let globalVar = "მე გლობალური ვარ";

if (true) {
    let blockIf = "მე if-ში ვარ";
}

for (let i = 0; i < 1; i++) {
    let blockFor = "მე for-ში ვარ";
}

console.log(globalVar); // დაკონსოლოგდება: "მე გლობალური ვარ"
// console.log(blockIf); // ERROR: blockIf is not defined
// console.log(blockFor); // ERROR: blockFor is not defined