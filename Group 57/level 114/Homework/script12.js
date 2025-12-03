//11)შექმენი ობიექტი book, რომელსაც ექნება "title", "author", "genre", "lang".
//ყველა მიანიჭე სტრინგი.
//for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომლებიც შეიცავენ ასო "o"-ს.

let book = {
  "title": "Oliver Twist",
  "author": "Charles Dickens",
  "genre": "Fiction",
  "lang": "English"
};

for (let i in book) {
  if (book[i].includes("o")) {
    console.log(book[i]);
  }
}