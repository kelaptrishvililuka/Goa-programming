// 8)მომხმარებელს შემოატანინე ფერი:
// "red", "green", "blue"

// switch–case-ით დაბეჭდე შესაბამისი ტექსტი.
// თუ სხვა ფერია → default →
// "ასეთი ფერი სისტემაში არ არის"

const color = prompt("Enter color (red, green, blue):");

switch (color) {
    case "red":
        console.log("You selected the red color");
        break;
    case "green":
        console.log("You selected the green color");
        break;
    case "blue":
        console.log("You selected the blue color");
        break;
    default:
        console.log("This color is not available in the system");
}