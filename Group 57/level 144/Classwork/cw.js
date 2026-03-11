//1 შექმენით ერეი სადაც მოათავსებ ზვიანგურ სახელებს შემდეგ კი გააკეთებ მათ დესტრუქციას და დაბეჭდავ სათითადოდ

const names = ["ლორწუა-ზვიანგი", "ბჟუტუჩა ზვიანგი", "გლიჩ-ზვიანგულა"];

const [a, b, c] = names;

console.log(a, b, c);

//2 შექმენი ობიექტი შენს შესახებ შემდეგ კი გააკეთე მისი დესტრუქცია და დაბეჭდე მონაცემები

const person = {
    name: "luka",
    city: "Mtskheta",
    fav: "programming",
};

const { name, city, fav } = person;

console.log(name, city, fav);