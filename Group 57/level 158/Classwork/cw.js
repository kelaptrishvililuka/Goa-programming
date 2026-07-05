// 1) შექმენით ექაუნთების ობიექტი შემდეგ დაასტრინგიფაიეთ დაბეჭდეთ და მერე გაპარსეთ და ეგეც დაბეჭდეთ

let account = {
    username: "lukas",
    password: "4444"
};

let jsoni = json.stringify(account)
console.log(jsoni);

let objecti = json.parse(json)
console.log(objecti)


// 2) შეინახეთ ეს ობიექტი localstorage ში, და ასევე წამოიღეთ იქიდან

let acc = {
    username: "luka",
    password: "0000"
}

localStorage.setItem('acc', JSON.stringify(acc))

data = JSON.parse(localStorage.getItem('acc'))

console.log(data)