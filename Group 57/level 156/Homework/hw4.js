// 4)TODO app --- > input + add button

// დავალება:

// დაამატე task-ები სიაში
// შეინახე localStorage-ში
// refresh-ზე ყველა task დაბრუნდეს

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

function renderTasks() {
    list.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.innerText = task;
        list.appendChild(li);
    });
}

button.addEventListener("click", () => {
    const value = input.value;

    if (value === "") return;

    tasks.push(value);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";

    renderTasks();
});

renderTasks();