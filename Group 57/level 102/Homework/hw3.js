// 3)ფუნქციამ მიიღოს პაროლი (პარამეტრი).

// while loop-ში მომხმარებელს (prompt) მოსთხოვოს პაროლი.

// სანამ შეყვანილი პაროლი არ დაემთხვევა სწორ პარამეტრს, მოსთხოვე თავიდან.

// თუ დაემთხვა → "წარმატებით!".
let typeasword = prompt();

function password(password) {
  while (true) {
    if (typeasword == password) {
      console.log("done");
      break;
    } else {
      typeasword = prompt("try again");
    }
  }
}

password("lukas");