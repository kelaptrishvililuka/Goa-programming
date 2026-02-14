/* 3)მომხმარებელს შემოატანინეთ რაიმე რიცხვი,სანამ მომხმარებელი არ შემოიტანს
 0 იანს იქამდე გაუმეორეთ რომ თავიდან შემოიტანოს რიცხვი */

let num = Number(prompt("Enter a number:"));

while (num !== 0) {
    num = Number(prompt("That is not 0. Please enter a number again:"));
}

alert("You entered 0. Program finished");