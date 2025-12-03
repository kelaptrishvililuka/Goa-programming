//1)
//Math.max() და Math.min()
//Math.max() და Math.min() მეთოდები აბრუნებენ არგუმენტებიდან მაქსიმალურ და მინიმალურ მნიშვნელობებს.

// let max = Math.max(5, 10, 2, 8, 3)
// let min = Math.min(5, 10, 2, 8, 3)
// console.log(max)  // 10
// console.log(min)  // 2

//2)
// დამრგვალების მეთოდები
//Math.round(), Math.ceil() და Math.floor()

// Math.round(4.7)  // 5       
// Math.ceil(9.1)   // 10    
// Math.floor(-3.6) // -4      


//3)
//ხარისხში აწევა
//გამოიყენეთ Math.pow()

//Math.pow(3, 4)  // 3^4 = 81
//Math.pow(5, 2)  // 5^2 = 25
//Math.pow(2, 0)  // 2^0 = 1


//4)
//კვადრატული ფესვი
//გამოთვალეთ კვადრატული ფესვი მნიშვნელობების:
//25, 144, 2
//დამრგვალეთ Math.round()-ის გამოყენებით.

// Math.round(25.6)   // 26
// Math.round(144.2)  // 144
// Math.round(2.5)    // 3

//5)
//აბსოლუტური მნიშვნელობა
//გამოთვალეთ აბსოლუტური მნიშვნელობა:
//-8.3, 5 - 12
//გამოიყენეთ Math.abs().

// Math.abs(-8.3)  // 8.3
// Math.abs(5 - 12) // 7

//7)
// Math.random() და calculate() ფუნქცია
//განსაზღვრეთ calculate(num) ფუნქცია, რომელიც:
//იღებს num პარამეტრს
//აბრუნებს მის კვადრატულ ფესვს (Math.sqrt)
//ამრგვალებს ქვემოთ (Math.floor)


// function calculate(num) {
//  return Math.floor(num);
// }

// console.log(calculate(7.8));  // 7

//9)
// განსაზღვრეთ pythagoras(a, b) ფუნქცია, რომელიც ითვლის ჰიპოტენუზას:
//მაგალითი: pythagoras(3, 4) → 5

// function pythagoras(a, b) {
//  return Math.sqrt(a*a + b*b);
// }

// console.log(pythagoras(3, 4)); // 5