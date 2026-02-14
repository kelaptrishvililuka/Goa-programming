//2)შექმენი სია -->  [20 , "giorgi" , 16 , 60.7 , "tbilisi" , "jora"]
//შენი დავალებაა რომ ინდექსების დახმარებით გამოიტანო ყველა ელემენტი სიიდან და გამოიტანო კონსოლში while loop დახმარებით

//შენი დავალებაა რომ giorgi შეცვალო "irakli" ით ,16 შეცვალო 90 ით და jora შეცვალო givia თი

let list = [20, "giorgi", 16, 60.7, "tbilisi", "jora"];

i = 0;
while (i < list.length) {
  console.log(list[i]);
  i++;
}

list[1] = "irakli";
list[2] = 90;
list[5] = "givia";

console.log(list);