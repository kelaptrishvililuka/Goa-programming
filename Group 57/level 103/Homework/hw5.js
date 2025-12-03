//5)შექმენით ფუნქცია average(arr) – მიიღოს რიცხვების სია და დააბრუნოს მათი საშუალო (ჯამი / რაოდენობა)

function sumArray(arr) {
    sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += i
    }
    console.log(sum / arr.length)
}

sumArray([13, 5334, 31245, 33, 563, 46, 634, 645, 614, 6, 6, 175, 2])