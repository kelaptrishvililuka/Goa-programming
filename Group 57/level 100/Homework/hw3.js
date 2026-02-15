// 3)მომხმარებელს prompt–ით შეეკითხე რიცხვი.

// თუ რიცხვი > 0 → დაბეჭდე "დადებითია".

// თუ რიცხვი < 0 → დაბეჭდე "უარყოფითია".

// თუ 0 → დაბეჭდე "ნულია".

let number = Number(prompt("enter number"));

if (number > 0) {
    console.log("positive");
} else if (number < 0) {
    console.log("negative");
} else {
    console.log("zero");
}