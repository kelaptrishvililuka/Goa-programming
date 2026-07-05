// 2)გვერდზე გაქვს ღილაკი "Toggle Theme"

// დავალება:

// დაჭერისას იცვლება background
// შეინახე არჩეული theme
// refresh-ის შემდეგ იგივე theme დარჩეს

// მინიშნება:

// შეინახე "dark" ან "light"

const btn = document.getElementById("themeBtn")

btn.onclick = () => {
    if (document.body.className == "dark")
    {
        document.body.className = "light"
        localStorage.setItem("theme", "light")

    } else {

        document.body.className = "dark";
        localStorage.setItem("theme", "dark")
    }
}