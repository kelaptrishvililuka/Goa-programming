// შექმენით პროდუქტის ობიექტი, რომელსაც აქვს დასახელება, ფასი და ვალუტა.
// დავალება: შექმენი ფუნქცია, რომელიც პარამეტრში მიიღებს ამ ობიექტს და დესტრუქციის გამოყენებით გამოიყენებს მის კუთვნილებას პროდუქტის ინფორმაციის გამოსატანად.

const product = {
    name: "ipad",
    price: 1379,
    currency: "GEL"
};

function showProductInfo({ name, price, currency }) {
    console.log(`Product Name: ${name}`);
    console.log(`Price: ${price} ${currency}`);
}

showProductInfo(product);