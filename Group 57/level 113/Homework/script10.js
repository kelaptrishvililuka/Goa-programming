// 10)შექმენით ობიექტი რომელიც იქნება ცარიელი,შენი დავალებაა რომ ამ ობიექტშ დაამატო 5 property,შემდეგ დააკონსოლლოგეთ(რომ შეამოწმოთ შეივსო(დაემატა)თუ არა ,და ამის შემდეგ ამოშალოთ 2 property (ბოლოს დააკონსოლლოგეთ რომ ნახოთ ამოიშალა თუარა)

let myObject = {}

myObject.name = "nika"
myObject.age = 19
myObject.city = "Kutaisi"
myObject.hobby = "Coding"
myObject.grade = "A"

console.log(myObject)

delete myObject.city
delete myObject.grade

console.log(myObject)