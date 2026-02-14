// //4)შექმენი ფუნქცია numberStatus(num)

// თუ ლუწი და დადებითია → "Positive Even"

// თუ ლუწი და უარყოფითია → "Negative Even"

// თუ კენტი და დადებითია → "Positive Odd"

// თუ კენტი და უარყოფითია → "Negative Odd"

// თუ 0 → "Zero"

// გამოიძახე ფუნქცია სხვადასხვა არგუმენტებით რამდენჯერმე

function numberStatus(num) {
    return num === 0 ? "Zero" :
        (num > 0 ? (num % 2 === 0 ? "Positive Even" : "Positive Odd") :
            (num % 2 === 0 ? "Negative Even" : "Negative Odd"));
}

console.log(numberStatus(3));
console.log(numberStatus(1));
console.log(numberStatus(-2));
console.log(numberStatus(0));
console.log(numberStatus(-5));