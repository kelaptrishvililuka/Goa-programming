// //1)შექმენი სია სადაც მოთავსებული იქნება ადამიანის სახელები , დაახლოებით 10 სახელი

// თქბენიდ დავალებაა რომ filter მეთოდის დახმარებით შექმნათ ახალი სია სადაც ინქებიან მხოლოდ ის სახელები რომელშიც ასობის რაოდენობა იქნება 5 ზე მეტი და და იწყება g ასოზე

// ეს დავალება შეასრულეთ single line function ითაც და ჩვეულებრივ return keyword ის გამოყენებითაც


let names = ["givi", "Levan", "goderzi", "Luka", "guram", "giorgi", "gvantsa", "Nino", "gvanca", "guram"];

let result = names.filter(function (name) {
    return name.length > 5 && name[0] === "g";
});

console.log(result);

let result2 = names.filter(name => name.length > 5 && name[0] === "g");

console.log(result2);