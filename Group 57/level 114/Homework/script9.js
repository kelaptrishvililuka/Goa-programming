// //9)შექმენი ობიექტი movie, რომელსაც ექნება "title", "genre", "rating", "year" და ყველას მიანიჭეთ სტრინგ ტიპის მონაცემი.
//for...in ციკლით გადაუარეთ ობიექტს და გამოიტანეთ მხოლოდ ის სტრინგები რომელთა სიგრძე ნაკლებია 4 ზე

let movie = {
  title: "fast and furious 6",
  genre: "Action",
  rating: "8.0",
  year: "2013",
};

for (let i in movie) {
  if (movie[i].length < 4) {
    console.log(movie[i]);
  }
}