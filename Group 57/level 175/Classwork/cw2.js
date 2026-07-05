// შექმენით ასინქრონული ფუიქნცია რომელიც წამოიღებს აიპიაიდან ინფორმაციას(ნახეთ რამე api დავალებიდან ან ნებსიმიერი) შენი დავალებაა რომ ეკრანზე გამოიტანო ეიპიაიდან რაიმე ტექსტი . გამოიყენე awync await

// ასევე გამოიყენე try catch finallt ბლოკი

async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();


        console.log(data.title);


    } catch (error) {
        console.log("Error:", error);

    } finally {
        console.log("Finished");
    }
}

getData();