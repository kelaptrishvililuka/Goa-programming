let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");

function updateCounter() {
    let tasks = document.querySelectorAll(".task").length;
    let done = document.querySelectorAll(".done").length;

    document.getElementById("counter").textContent = `${done}/${tasks}`;
}

function createTask(text) {
    let task = document.createElement("div");
    task.className = "task";

    task.innerHTML = `
        <div class="left">
            <div class="check"></div>
            <span>${text}</span>
        </div>
        <div class="actions">
            <i class="fa-regular fa-pen-to-square edit"></i>
            <i class="fa-regular fa-trash-can delete"></i>
        </div>
    `;

    taskList.appendChild(task);
}

function addTask() {
    let value = taskInput.value.trim();

    if (!value) return;

    createTask(value);
    taskInput.value = "";
    updateCounter();
}

addBtn.onclick = addTask;

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("check")) {
        e.target.classList.toggle("done");

        let text = e.target.nextElementSibling;
        text.classList.toggle("completed");

        updateCounter();
    }

    if (e.target.classList.contains("delete")) {
        e.target.closest(".task").remove();
        updateCounter();
    }

    if (e.target.classList.contains("edit")) {
        let span = e.target.closest(".task").querySelector("span");
        let newText = prompt("Edit task", span.textContent);

        if (newText) span.textContent = newText;
    }

});