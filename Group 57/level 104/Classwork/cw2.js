//2)შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგების სია,სადაც მოთავსებული იქნება 10 სტრინგი,

//შენი დავალებაა რომ -->

//---გაიგო ამ სიის სიგრძე

//გამოიტანო მე3 ინდექსიდან მე8 ინდექსამდე ელემენტები

//გამოიტანო მე 4 ე ინდექსიდან 3 ელემენტი

function processStrings(arr) {
    console.log(arr.length)    
    console.log(arr.slice(3, 9))
    console.log(arr.slice(4, 7))
}

const stringsList = ["a","b","c","d","e","f","g","h","i","j"]
processStrings(stringsList)