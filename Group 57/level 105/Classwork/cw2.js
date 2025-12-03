//3)მომხმარებელს შემოატანინეთ რიცხვი,შემდეგ დაატრიალეთ ფორ ციკლი 1 იდან მომხმარებლის მიერ შემოტანილ რიცხვამდე და იპოვე ამ რიცხვების საშუალო არითმეტიკული,შემდეგ შეამოწმეთ,თუ მიღებული საშუალო არის 20ზე მეტი და ლუწი,მაშინ დააკონსოლოგე რომ "good mark" შემდეგ შეამოწმეთ მიღებული საშუალო არის 20 ზე ნაკლები და კენტი დაუკონსოლლოგეთ --> 'very bad mark"

function checkNumber() {
    let num = Number(prompt("Enter your number: "))
    let sum = 0
    let count = 0

    for (let i = 1; i <= num; i++) {
        sum += i
        count++
    }

    let avg = sum / count

    if (avg > 20 && avg % 2 === 0) {
        console.log("good mark")
    } else if (avg < 20 && avg % 2 !== 0) {
        console.log("very bad mark")
    }
}
checkNumber()   