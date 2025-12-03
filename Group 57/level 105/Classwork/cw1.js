//2)მომხმარებელს შემოატანინე რიამე რიცხვი 1იდან 10 მდე,თუ მომხმარებლის მიერ შემოტანილი რიცხვი არის ლუწი,მაგ შემთხვევაში დაატრიალეთ ფორ ლუპი და ამ რიცხვიდან 50 მდე გამოიტანეთ ყველა ლუწი რიცხვი,და თუ მომხმარებლის მიერ შემოტანილი რიცხვი არის კენტი,მაშინ დაატრიალეთ WHILE LOOP ამ რიცხვიდან 50 მდე და გამოიტანეთ ყველა კენტი რიცხვი

function list() {
    let num1 = Number(prompt("Enter your num: "))

    if (num1 < 1 || num1 > 10) {
        console.error('enter  number between 1 to 10')
        return
    }
    if (num1 % 2 === 0) {
        for (let i = num1; i <= 50; i += 2) {
            console.log(i)
        }
    }
    else {
        for (let i = num1; i <= 50; i += 2) {
            console.log(i)
        }
    }
}
list()