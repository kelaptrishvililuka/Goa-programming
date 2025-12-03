// 2)შექმენით ობიექტი ,სადაც გექნებათ თავიდან 3 property(თქვენ რაზეც გინდათ) , ამის შემდეგ ამ ობიექტში დაამატეთ კიდევ 2 property ,(დააკონსოლლოგეთ ობიექტი რომ ნახოთ ჩაემატა თუ არა) ,ამის შემდეგ ამოშალეთ ობიექტიდან თავიდან თქვენს მოერ შექმნილი 3 property და დატოვეთ მხოლოდ ჩამატებულები, დააკონსოლლოგეთ ობიექტი რომ ნახოთ შედეგი ამოიშალა თუ არა  


let car = {
  brand: "Audi",
  color: "black",
  year: 2015
}

car.price = 25000
car.engine = "RS3"

console.log("After adding new properties:")
console.log(car)

delete car.brand
delete car.color
delete car.year

console.log("After deleting the first properties:")
console.log(car)