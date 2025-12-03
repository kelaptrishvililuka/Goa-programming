//2)შექმენი ფუნქცია,შემდეგ შექმენით 3 ცვლადი,1 ში შეინახეთ სახელი მეორეში ასაკი და მესამეში საცხოვრებელია დგილი,თქვენი დავალებაა რომ ფუნქციამ კონსოლში გამოიტანოს hello , my name is {name} and i am {age} years old, i live in {city} , გამოიძახე ფუნქცია 5 ჯერ 

function introduce(name, age, city) {
  console.log(`hello, my name is ${name} and i am ${age} years old, i live in ${city}`);
}

const myName = "Luka";
const myAge = 16;
const myCity = "Mtskheta";

introduce(myName, myAge, myCity);
introduce(myName, myAge, myCity);
introduce(myName, myAge, myCity);
introduce(myName, myAge, myCity);
introduce(myName, myAge, myCity);