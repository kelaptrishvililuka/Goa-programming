// 2)დაწერე ფუნქცია countEvenOdd(arr), რომელიც მიიღებს რიცხვების სიას და დაბეჭდავს რამდენია ლუწი და რამდენი კენტი.

function countEvenOdd(arr) {
    let odd = 0
    let even = 0
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            even++;
        } else {
            odd++;
        }
    }
    console.log(odd)
    console.log(even)
}

countEvenOdd([31, 53354, 3415, 3264, 3063, 6361, 34, 695, 94, 76, 506, 715, 89])