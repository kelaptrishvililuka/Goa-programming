// 5)const car = {
//   brand: "BMW",
//   model: "M5",
//   engine: {
//     type: "V8",
//     power: {
//       hp: 600,
//       torque: 750
//     }
//   }
// }

// დესტრუქციის გამოყენებით გამოიტანე:

// brand

// model

// engine type

// hp

// torque

const car = {
    brand: "BMW",
    model: "M5",
    engine: {
        type: "V8",
        power: {
            hp: 600,
            torque: 750
        }
    }
}

const { brand, model, engine: { type }, engine: { power: { hp, torque } } } = car;

console.log(brand, model, type, hp, torque);