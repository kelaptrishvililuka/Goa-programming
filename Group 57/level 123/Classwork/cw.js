//შექმენით კონსტრუქტორი სახელად Student რომელიც მიიღებს მოსწავლის სახელს და თარიღს, კონსტრუქტორში შიგნით შექმენით ფუნქცია რომელიც გამოაკონსოლებს მოსწავლის სახელს და თარიღს თუ როდის დაიწყო სწავლა goa-ში

class Student {
    constructor(name, startDate) {
        this.name = name
        this.startDate = startDate

        this.showInfo = function () {
            console.log("student name: " + name + ", Started studying: " + startDate)
        }
    }
}

let s1 = new Student('saba', '2005-01-10', "goa")
let s2 = new Student('nika', '2004-09-15', "goa")
let s3 = new Student('george', '2003-03-20', "goa")

console.log(s1)
console.log(s2)
console.log(s3)

s1.showInfo()
s2.showInfo()
s3.showInfo()