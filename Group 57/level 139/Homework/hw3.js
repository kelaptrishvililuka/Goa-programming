// //3)შექმენი ფუნქცია triangleType(a, b, c)

// თუ ყველა გვერდი ტოლია → "Equilateral"

// თუ ორი გვერდი ტოლია → "Isosceles"

// თუ ყველა განსხვავებულია → "Scalene"

// გამოიძახე ფუნქცია სხვადასხვა არგუმენტებით რამდენჯერმე

function triangleType(a, b, c) {
    return (a === b && b === c) ? "Equilateral" :
        (a === b || a === c || b === c) ? "Isosceles" :
            "Scalene";
}
//სამივე ტოლი - Equilateral ორი ტოლი - Isosceles ყველა განსხვავებული - Scalene 

console.log(triangleType(5, 5, 5));
console.log(triangleType(2, 4, 4));
console.log(triangleType(4, 5, 6));