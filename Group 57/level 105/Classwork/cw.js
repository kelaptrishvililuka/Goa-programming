//1)მომხმარებელს შემოატანინეთ რიცხვი,1 იდან მომხმარებლის მიერ შემოტანილ რიცხვამდე დაატრიალეთ ლუპი და ჩაამატეთ ეს როცხვები სიაში,შემდეგ ამ სიიდან დაბეჭდეთ მხოლოდ ლუწი რიცხვები

function list() {
  let num1 = Number(prompt("Enter your number: "))
  let list2 = []

  for (let i = 1; i <= num1; i++) {
    list2.push(i)
  }

  for (let n = 0; n < list2.length; n++) {
    if (list2[n] % 2 == 0) {
      console.log(list2[n])
    }
  }
}

list()