// 5)შექმენი ობიექტი movie ველებით: name, genre, rating.
//Object.keys() მეთოდის გამოყენებით გამოიტანე ყველა key ცალ ცალკე ხაზზე (for loop)
//ასევე
//Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value ცალ ცალკე ხაზზე (for loop)

const movie = {
  name: "Inception",
  genre: "Sci-Fi",
  rating: 9
};

for (let key of Object.keys(movie)) {
  console.log(key)
}

for (let value of Object.values(movie)) {
  console.log(value)
}