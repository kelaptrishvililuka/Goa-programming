/* 4)მომხმარებელს შემოატანინეთ სტრინგი,სანამ მომხმარებელი არ შემოიტანს თქვენს სახელს იქამდე გაუმეორეთ რომ თავიდან შემოიყვანოს სახელი,ასევე დაითვალეთ ცდების რაოდენობა თუ რამდენჯერ სცადა მომხმარებელმა შემოტანა,
ამისთვის დაგჭრდებათ თავიდან შექმნათ ცვლადი და გაუტოლოთ 0 ს,და ყოველ ჯერზე როცა მომხმარებელი შეიყვანს არასწორ ინფოს განაახლოთ ამ ცვლადის მნიშვნელობა,ბოლოს როცა გაარტყავს და შემოიყვანს
თქვენს სახელს დაუკონსოლლოგეთ --> "you guessed my name and your attempts is : ...*/

let attempts = 0;
let userInput = prompt("Enter my name bro:");

while (userInput !== "luka") {
    attempts = attempts + 1;
    userInput = prompt("Wrong name, try again brobarcho:");
}

console.log("you guessed my name and your attempts is : " + attempts);