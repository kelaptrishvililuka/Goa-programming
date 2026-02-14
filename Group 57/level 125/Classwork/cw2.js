//კონსოლში დაბეჭდეთ საათი ისე რომ ყოველ ერთწამში მნიშველობა განახლდეს და დაიწეროს ახალი დრო

function showTime() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    console.log(h + ":" + m + ":" + s);
}

setInterval(showTime, 1000) 