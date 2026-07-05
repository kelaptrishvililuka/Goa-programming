// 5)წინა დავალებას დაამატე:

// დავალება:

// თითო task-ს ჰქონდეს delete ღილაკი
// წაშლისას localStorage-იც განახლდეს

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

function renderTasks() {
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerText = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
        });

        li.appendChild(deleteBtn);
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