// 5)მომხმარებელს შემოატანინე ტექსტი:
// "car", "bus", "bike", "train"

// switch–case გამოყენებით დაბეჭდე შესაბამისი აღწერა.
// default შემთხვევაში → "უცნობი ტრანსპორტი".

const transport = prompt("Enter transport (car, bus, bike, train):");

switch (transport) {
    case "car":
        console.log("car — 4-wheel private transport");
        break;
    case "bus":
        console.log("bus — public transport");
        break;
    case "bike":
        console.log("bike — 2-wheel, eco-friendly");
        break;
    case "train":
        console.log("train — rail-based transport");
        break;
    default:
        console.log("unknown transport");
}