// შექმენით ფრომისი რომელშიც

// შექმნით ცვლადს სადაც იქნება შენახული რაიმე სახელი

// შენი დავალებაა შეამოწმო თუ სახელი იწყება ასო "a" ზე ან ასო "g" ზე

// მაშინ დაარესოლვე ფრომისი და რესოლვს გაატანე ის სახელი რაც ცვლადში გაქვს შენახული

// სხვა შემთხვევაში დაარეჯექთე ფრომისი და ერორად გაატანე რაიმე ტექსტური ერორი

// , შემდეგ გამოიძახე ეს ფრომისი ისე რომ რეჯექთის და რესოლვის შემთხვევაშიც გამოიტანოს ის მნიშვნელობები რაც ფრომისმა გამოგვატანა 

let prom = new Promise((resolve, reject) => {
    const name = "giorgi"

    if (name.startsWith("a") || name.startsWith("g")) {
        resolve(name)
    } else {
        reject("this name does not start with these letters")
    }
})


prom
    .then((data) => {
        console.log("this name starts with g or a " + data)
    }, (err) => {
        console.log(err)
    })