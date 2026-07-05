//  შექმენით ფუნქცია რომელიც ასინქრონულად დააბრუნებს მონაცემბს(მონაცემი იქნება ამინდის პროგნოზი), ამ ფუნქციას გადაეცემა callback რომელიც მიიღებს არგუმენტად ამინდის პროგნოზის მონაცემს და გამოსახავს შესაბამის რჩევას

function getWeather(callback) {
    setTimeout(() => {
        callback("rainy");
    }, 1000)
}

getWeather((weather) => {
    if (weather === "Sunny") {
        console.log("wear a clothes")
    } else if (weather === "rainy") {
        console.log("take a umbrella")
    } else {
        console.log("weather is normal")
    }
})

getWeather(showWeather)