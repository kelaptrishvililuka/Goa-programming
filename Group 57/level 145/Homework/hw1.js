// 1)მოცემულია ობიექტი:

// const company = {
//   name: "TechCorp",
//   location: {
//     country: "Georgia",
//     city: {
//       name: "Tbilisi",
//       street: "Rustaveli"
//     }
//   },
//   employees: [
//     { name: "Nika", age: 22 },
//     { name: "Giorgi", age: 25 }
//   ]
// }

// დესტრუქციის გამოყენებით ერთ ლაინში გამოიტანე კონსოლში:

// company name

// country

// city name

// street

// პირველი employee-ს name

// მეორე employee-ს age

const company = {
    name: "TechCorp",
    location: {
        country: "Georgia",
        city: {
            name: "Tbilisi",
            street: "Rustaveli"
        }
    },
    employees: [
        { name: "Nika", age: 22 },
        { name: "Giorgi", age: 25 }
    ]
}

const { name, location: { country, city: { name: cityName, street } }, employees: [{ name: firstEmployeeName }, { age: secondEmployeeAge }] } = company;

console.log(name, country, cityName, street, firstEmployeeName, secondEmployeeAge);