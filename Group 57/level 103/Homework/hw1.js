//1)შექმენი ფუნქცია sumArray(arr), რომელიც მიიღებს რიცხვების სიას პარამეტრად და დააბრუნებს სიაში მყოფი რიცხვების  ჯამს.

function sumArray(arr) {
    sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += i;
    }
    console.log(sum)
}

sumArray([13, 54, 35, 33, 346, 66, 34, 615, 643, 7656, 90, 716, 1])