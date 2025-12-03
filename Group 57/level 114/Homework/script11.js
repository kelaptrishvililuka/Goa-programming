//11) შექმენი ობიექტი student, რომელსაც ექნება "firstName", "lastName", "class", "id".
//ყველა იყოს სტრინგი.
//for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომელთა სიგრძე ტოლია 3-ის.

let student = {
  "firstName": "luka",
  "lastName": "keleptrishvili",
  "class": "11c",
  "id": "123456789"
};

for (let i in student) {
  if (student[i].length === 3) {
    console.log(student[i]);
  }
}